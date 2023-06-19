import React, { useState } from "react";

const Screen = () => {
  const [imgSrc, setImgSrc] = useState(null);

  const upload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImgSrc(reader.result || null); // 파일 컨첸츠
        resolve();
      };
    });
  };

  return (
    <>
      <div className="bg-slate-600 flex space-x-6 justify-center">
        <div className="block">
          <input
            accept="image/*"
            multiple
            type="file"
            onChange={(e) => upload(e)}
            className="block items-center w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100 
    "
          />
        </div>
      </div>
      <div className="flex mt-6">
        <img
          className="box-content min-h-96 h-96 w-2/3 p-4 border-8 border-slate-800 mx-auto"
          src={imgSrc}
          alt="hello"
        />
      </div>
    </>
  );
};

export default Screen;
// as-is 853 144
// to-be 1040 469
