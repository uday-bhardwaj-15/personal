"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { UserAuth } from "@/app/context/AuthContext";

const TopBar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <>
      <div className="flex bg-gradient-to-r from-purple-600 to-blue-500  drop-shadow-xl h-20">
        <div className=" font-bold text-lg  pl-3 flex items-center justify-start w-1/5  cursor-pointers">
          <Link
            href="/"
            className="text-white text-lg font-bold cursor-pointers "
          >
            Navbar
          </Link>
        </div>
        {!user ? null : (
          <>
            <div className="flex items-center justify-evenly w-3/5">
              <Link href="/feed">
                <button className="mx-2  text-white hover:text-gray-300 focus:outline-none">
                  Feed
                </button>
              </Link>
              <Link href="/blog">
                <button className="mx-2 text-white hover:text-gray-300 focus:outline-none">
                  Blog
                </button>
              </Link>
              <Link href="/about">
                <button className="mx-2 text-white hover:text-gray-300 focus:outline-none">
                  About
                </button>
              </Link>
            </div>
          </>
        )}
        <div className="flex items-center justify-end w-1/5 pr-4">
          <div className="dropdown position-none dropdown-end items-end align-middle">
            {!user ? null : (
              <label tabIndex={0} className="">
                <div className="w-10 rounded-full">
                  <FaUser
                    alt="User Avatar"
                    className="w-2/3 h-2/3 rounded-full object-cover mx-2 text-white hover:text-gray-300  focus:outline-none"
                  />
                </div>
              </label>
            )}

            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              {!user ? null : (
                <li>
                  <Link href="/profile">
                    <button className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
