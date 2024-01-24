"use client";
import { UserAuth } from "@/app/context/AuthContext";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import "tailwind-scrollbar-hide";

import {
  collection,
  getDocs,
  updateDoc,
  doc,
  addDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import Edit from "../components/Edit";
import { data } from "autoprefixer";

const page = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [fetchData, setFetchData] = useState();
  const dref = collection(db, "NEXTJS-AUTH-PROJECT");

  const fetch = async () => {
    const snapshot = await getDocs(dref);
    const dataMap = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setFetchData(dataMap);
  };
  useEffect(() => {
    fetch();
  }, []);

  // like code upload //
  const [toggle, setToggle] = useState(false);
  const handleLike = async (id) => {
    setToggle(!toggle);
    const docRef = doc(db, "NEXTJS-AUTH-PROJECT", id);
    const data = {
      like: toggle,
    };
    updateDoc(docRef, data)
      .then((docRef) => {
        console.log("value updated");
        fetch();
      })
      .catch((err) => {
        console.log("failed");
      });
    console.log(toggle);
  };
  const [commentBox, setCommentBox] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const handleShow = (id) => {
    setCommentBox(!commentBox);

    setSelectedPostId(id);
  };
  const comet = async (id) => {
    const comeRef = doc(db, "NEXTJS-AUTH-PROJECT", id);
    const commentInput = document.getElementById("comment-" + id);
    const comment = commentInput.value;

    if (comment) {
      const existingComments =
        fetchData.find((item) => item.id === id)?.comments || [];
      const newComments = [
        ...existingComments,
        { name: user.displayName, text: comment },
      ];

      const comedata = {
        comments: newComments,
      };

      updateDoc(comeRef, comedata)
        .then(() => {
          console.log("value updated");
          commentInput.value = ""; // Clear input after update
          fetch(); // Refresh data after update
        })
        .catch(() => {
          console.log("failed");
        });
    }
  };

  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");

  const [editBox, seteditBox] = useState(false);

  const handleEdit = async (id) => {
    const updateData = doc(db, "NEXTJS-AUTH-PROJECT", id);

    if (title.length > 0) {
      await updateDoc(updateData, { Title: title });
      fetch();
      seteditBox(false);
    } else if (des.length > 0) {
      await updateDoc(updateData, { Des: des });
      fetch();
      seteditBox(false);
    } else if (title.length == 0 && des.length == 0) {
      fetch();
      alert("The Input Is Empty");
    }
  };

  return (
    <>
      {/* /* Blog cards */}
      {fetchData?.map((data) => {
        return (
          <>
            <div>
              <br></br>
              <div
                className="  editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl bg-gradient-to-r from-purple-600 to-blue-500
                rounded-2xl scroll scrollbar-hide  "
              >
                {/* edit button  */}
                <div className="flex  justify-end    ">
                  <button
                    className="bg-white px-4 py-2  text-blue-500 rounded-full hover:bg-[#190482] hover:text-white"
                    onClick={() => {
                      seteditBox(!editBox);
                    }}
                    //
                  >
                    Edit
                  </button>

                  {editBox === true && (
                    <>
                      <div className="flex ">
                        <form className="flex justify-end ">
                          <input
                            type="text"
                            placeholder="Title"
                            className="input input-bordered input-success w-full max-w-xs"
                            onChange={(e) => setTitle(e.target.value)}
                            required
                          />
                          <input
                            type="text"
                            placeholder="Description"
                            className="input input-bordered input-success w-full max-w-xs"
                            onChange={(e) => setDes(e.target.value)}
                            required
                          />
                        </form>
                        <button
                          className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
                          onClick={() =>
                            handleEdit(data.id, data.Title, data.Des)
                          }
                        >
                          Update
                        </button>
                      </div>
                    </>
                  )}
                </div>
                {/* edit button  */}
                <div className="p-6 text-left ">
                  <h5 className="mb-2 text-2xl font-bold text-white leading-tight ">
                    {data.Title}
                  </h5>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {data.Des}
                  </p>
                </div>
                <div
                  className="text-[#C2D9FF] text-xs p-6 text-left
                  "
                >
                  <p className="   ">Posted by {data.UserName}</p>
                </div>
                <div className="border-t-2 flex justify-evenly items-center border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                  <button
                    type="button"
                    className="inline-block rounded  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white bg-transparent"
                    onClick={() => handleLike(data.id)}
                  >
                    {data.like ? (
                      <button className="text-[#B10000]  ">
                        <FaHeart className="   text-2xl" />
                      </button>
                    ) : (
                      <button className=" text-white-700  ">
                        <CiHeart className="  text-2xl" />
                      </button>
                    )}
                  </button>
                  <input
                    className="comment bg-gray-100 border border-gray-300 flex items-center  px-4 py-2
outline-none rounded-full text-black "
                    type="text"
                    placeholder=" Leave a comment"
                    autoComplete="off"
                    id={"comment-" + data.id}
                    required
                  />
                  <br></br>
                  <button
                    className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-[#190482] hover:text-white transition duration-300"
                    onClick={() => comet(data.id)}
                  >
                    Post
                  </button>
                </div>
                {commentBox === true ? (
                  <button
                    onClick={() => handleShow(data.id)}
                    className="text-xs p-6 text-left text-black cursor-pointer w-40  hover:text-white"
                  >
                    Hide All Comments
                  </button>
                ) : (
                  <button
                    onClick={() => handleShow(data.id)}
                    className="text-xs p-6 text-left text-black cursor-pointer w-40  hover:text-white"
                  >
                    Show All Comments
                  </button>
                )}

                {commentBox == true && selectedPostId === data.id && (
                  <article
                    className="text-center  editor mx-auto w-10/12 flex flex-col     from-purple-600 to-blue-500
   "
                  >
                    {data.comments &&
                      data.comments.map((comment, index) => (
                        <>
                          <div className="mx- my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8 bg-white ">
                            <div className="w-full text-left">
                              <div className="mb-2 flex flex-col justify-between text-blue-600 sm:flex-row">
                                <h3 className="font-medium ">{comment.name}</h3>
                              </div>
                              <p key={index} className="text-sm text-black">
                                {comment.text}
                              </p>
                            </div>
                          </div>
                        </>
                      ))}
                  </article>
                )}
              </div>
            </div>

            {/* comment bar */}
          </>
        );
      })}
    </>
  );
};

export default page;
