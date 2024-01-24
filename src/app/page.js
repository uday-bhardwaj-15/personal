"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { UserAuth } from "@/app/context/AuthContext";

import { FaRegUserCircle } from "react-icons/fa";
import { LuUserCog2 } from "react-icons/lu";
import Login from "./components/Login";

const Login = () => {
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

export default function Home() {
  return (
    <div className="scrollbar-hide ">
      {" "}
       <div className="h-[calc(100vh-4.1875rem)] flex flex-col justify-center items-center scrollbar-hide overflow-hidden">
        <div className="w-3/6 p-10">
          {loading ? null : !user ? (
            <>
              <div className="space-y-4">
                <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
                  Sign in to Continue <br />
                </h2>
              </div>
              <div className="mt-16 grid space-y-4">
                <button
                  className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                  onClick={handleSignIn}
                >
                  <div className="relative flex items-center space-x-4 justify-center">
                    <img
                      src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                      className="absolute left-0 w-5"
                      alt="google logo"
                    />
                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                      Continue with Google
                    </span>
                  </div>
                </button>
              </div>
            </>
          ) : (
            <div className="space-y-4 text-center">
              <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
                Welcome, {user.displayName} <br />
              </h2>
              <br />
              <div className="mt-16 grid space-y-4">
                <button
                  className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                  onClick={handleSignOut}
                >
                  <div className="relative flex items-center space-x-4 justify-center">
                    <CiLogout
                      className="absolute left-0 w-5 text-black"
                      alt="signout logo"
                    />
                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                      Continue To Signout
                    </span>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
