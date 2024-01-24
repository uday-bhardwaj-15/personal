import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-500 min-h-screen flex justify-center items-center ">
      <div className="text-white ">
        <h1 className=" font-black text-center text-4xl mb-6 text-white ">
          About Us
        </h1>
        <p className="text-lg mb-8 text-center text-white">
          {" "}
          Welcome to our incredible journey! We are a passionate team dedicated
          to creating amazing things and making a difference in the world.
        </p>
        <div className="flex justify-center">
          <Link
            href="/feed"
            className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Feeds
          </Link>
        </div>
      </div>
    </div>
  );
};
export default page;
