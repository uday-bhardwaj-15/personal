"use client";

import React, { useEffect, useState } from "react";
import { UserAuth } from "@/app/context/AuthContext";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const page = () => {
  const [title, setTitle] = useState();
  const [des, setDes] = useState();
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  const dref = collection(db, "NEXTJS-AUTH-PROJECT");

  const add = async () => {
    const adddata = await addDoc(dref, {
      Title: title,
      Des: des,
      like: false,
      UserName: user.displayName,
    });
    if (adddata) {
      alert("posted");
      window.location.reload();
    } else {
      alert("Sorry");
    }
  };
  console.log(des);

  return (
    <div>
      <div className="heading text-center font-bold text-2xl m-5 text-gray-800 ">
        New Post
      </div>

      <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl  bg-gradient-to-r from-[#7752FE] to-[#8E8FFA] opacity-100 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 ">
        <>
          <input
            className="title bg-gray-100 border border-gray-300 p-4 mb-4 outline-none"
            name="title"
            required
            spellcheck="false"
            placeholder="Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
            spellcheck="false"
            name="des"
            placeholder="Write Your Content Here.."
            onChange={(e) => setDes(e.target.value)}
            value={des}
            required
          ></textarea>
        </>
        <br />
        <div class="buttons flex">
          <div
            className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer
       text-gray-500 ml-auto hover:bg-[#7752FE] hover:text-white"
            onClick={add}
          >
            Post
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
