"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { UserAuth } from "@/app/context/AuthContext";

import { FaRegUserCircle } from "react-icons/fa";
import { LuUserCog2 } from "react-icons/lu";
import Login from "./components/Login";
export default function Home() {
  return (
    <div className="scrollbar-hide ">
      {" "}
      <Login />
    </div>
  );
}
