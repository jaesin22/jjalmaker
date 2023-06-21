import React, { useState } from "react";

const Text = ({ onTextChange }) => {
  const [text, setText] = useState(" ");

  const onChange = (e) => {
    setText(e.target.value);
    onTextChange(e.target.value);
  };

  return (
    <div className="flex mt-10 ml-3">
      <label className="flex-none ml-1 pt-5">텍스트</label>
      <textarea
        rows="4"
        className="p-2.5 w-full ml-5 text-sm text-white bg-[#222933] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
         dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={onChange}
        value={text}
      ></textarea>
    </div>
  );
};

export default Text;
