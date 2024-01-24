"use client";
import { ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";

import {
  collection,
  getDocs,
  updateDoc,
  doc,
  addDoc,
} from "firebase/firestore";

const Edit = ({ data, seteditBox }) => {
  const [title, setTitle] = useState();
  const [des, setDes] = useState();
  //   const collectionRef = collection(db, "NEXTJS-AUTH-PROJECT");
  //   const documentId = "KplEixWafhyKd7C2OHwm";
  //   const uref = doc(collectionRef, documentId);

  //   const editDoc = async () => {
  //     const updatedata = await updateDoc(uref, {
  //       Title: title,
  //       Des: des,
  //     });
  //     if (updatedata) {
  //       alert("posted");
  //       window.location.reload();
  //     } else {
  //       alert("Sorry");
  //     }
  //   };
  const editDoc = async (id) => {
    const uRef = doc(db, "NEXTJS-AUTH-PROJECT", id);
    console.log(uRef);
    const edata = {
      Title: title,
      Des: des,
    };
    updateDoc(uRef, edata)
      .then((uRef) => {
        console.log("value updated");
      })
      .catch(() => {
        console.log("failed");
      });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        className="input input-bordered input-success w-full max-w-xs"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        className="input input-bordered input-success w-full max-w-xs"
        onChange={(e) => setDes(e.target.value)}
      />
      <button onClick={editDoc}>Update</button>
    </div>
  );
};

export default Edit;
