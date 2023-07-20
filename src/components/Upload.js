import React, { useRef } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setImage } from "../reducers/font";

const UploadImage = () => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const upload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageDataUrl = e.target.result;
      dispatch(setImage(imageDataUrl));
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <UploadOutlined
        onClick={upload}
        className="flex items-center justify-center cursor-pointer bg-[#222933] text-white
        text-lg w-7 h-7 lg:text-[22px] lg:w-8 lg:h-8"
        style={{
          border: "1px solid #ffffff",
          borderRadius: "3px",
        }}
      />
    </>
  );
};

export default React.memo(UploadImage);