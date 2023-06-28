import React, { useRef } from "react";
import { UploadOutlined } from "@ant-design/icons";

const UploadImage = ({ onImageUpload }) => {
  const fileInputRef = useRef(null);

  const upload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageDataUrl = e.target.result;
      onImageUpload(imageDataUrl);
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
        className="flex items-center justify-center cursor-pointer bg-[#222933] text-white"
        style={{
          fontSize: "22px",
          width: "32px",
          height: "32px",
          border: "1px solid #ffffff",
          borderRadius: "3px",
        }}
      />
    </>
  );
};

export default React.memo(UploadImage);
