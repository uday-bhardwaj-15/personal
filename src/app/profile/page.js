"use client";
import { useEffect, useState } from "react";
import { imageDb } from "@/app/firebase";
import { v4 } from "uuid";
import { uploadBytes, ref, listAll, getDownloadURL } from "firebase/storage";
import Foot from "../components/Foot";

const page = () => {
  const [img, setImg] = useState("");
  const [imgUrl, setImgUrl] = useState([]);
  const handleChange = () => {
    if (img !== null) {
      const imgRef = ref(imageDb, `files/${v4()}`);
      uploadBytes(imgRef, img).then((value) => {
        console.log(value);
        getDownloadURL(value.ref).then((url) => {
          setImgUrl((data) => [...data, url]);
        });
      });
    }
  };
  useEffect(() => {
    listAll(ref(imageDb, "files")).then((imgs) => {
      console.log(imgs);
      imgs.items.forEach((val) => {
        getDownloadURL(val).then((url) => {
          setImgUrl((data) => [...data, url]);
        });
      });
    });
  }, []);

  return (
    <div>
      <div>
        <h1 className=" text-center text-2xl text-black font-bold  ">
          Profile
        </h1>
      </div>
      <div className="divider"></div>
      <div className="flex justify-center ">
        <div className="py-12">
          <input
            type="file"
            className="file-input file-input-bordered file-input-accent w-full max-w-xs "
            onChange={(e) => setImg(e.target.files[0])}
          ></input>
          <button className="btn btn-outline btn-accent" onClick={handleChange}>
            Upload
          </button>
        </div>
      </div>
      <div className="divider"></div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            People also follow these profiles
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {imgUrl.map((dataVal) => (
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={dataVal}
                    alt=""
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a>
                        <span aria-hidden="true" className="absolute inset-0" />
                        no
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">no</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">no</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
