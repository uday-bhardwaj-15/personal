"use client";
import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { CiShare2, CiFaceSmile, CiFaceFrown } from "react-icons/ci";
import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import Image from "next/image";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { query, orderBy, limit } from "firebase/firestore";
import { Database } from "firebase/database";

const Like = () => {
  const [toggle, setToggle] = useState(true);
  const toggler = async () => {
    const toggled = await addDoc(dref, {
      Uday: toggle,
    });
    if (toggled) {
      alert("liked");
    } else {
      alert("something went wrong");
    }
  };
  console.log(toggle);
  return (
    <div>
      {" "}
      <button className=" text-2xl  flex items-center justify-end space-x-2 text-gray-800 bg-violet-500 hover:bg-violet-600 ">
        <CiFaceSmile />
        <span
          className="text-gray-800 w-10px "
          onClick={toggler}
          onChange={(e) => setToggle(e.target.value)}
          value={toggle}
        ></span>
        {toggle ? <span>Liked</span> : <span>Disliked</span>}
        <span className="text-gray-800 w-10px ">20</span>
      </button>
    </div>
  );
};

export default Like;
