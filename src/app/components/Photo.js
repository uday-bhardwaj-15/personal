"use client";
import { useEffect, useState } from "react";
import { imageDb } from "@/app/firebase";
import { v4 } from "uuid";
import { uploadBytes, ref, listAll, getDownloadURL } from "firebase/storage";
import Foot from "../components/Foot";

const Photo = () => {
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
    </div>
  );
};

export default Photo;
