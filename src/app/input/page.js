"use client";
import React, { useState } from "react";

const page = () => {
  const [inputval, setInputval] = useState([
    { id: 1, name: "Uday" },
    { id: 2, name: "vishu" },
  ]);
  const [inputdata, setInputData] = useState("");
  const addval = () => {
    setInputval((prev) => [...prev, { name: inputdata }]);
  };

  return (
    <div className="flex   justify-center ">
      <div className="flex  items-center">
        <input
          className=" outline-blue-800  rounded-xl  border-blue-600 p-3  "
          placeholder="Write something"
          onChange={(e) => setInputData(e.target.value)}
        ></input>
        <button
          className="text-white bg-blue-600  m-1    p-3 rounded-xl"
          onClick={addval}
        >
          {" "}
          Add
        </button>
      </div>
      <div class="whitespace-break-spaces "></div>
      <br></br>
      {inputval.map((ele) => (
        <div className="rounded-xl flex text-white m-3 font-semibold bg-blue-600  p-3 ">
          <span>{ele.name}</span>
        </div>
      ))}
    </div>
  );
};

export default page;
