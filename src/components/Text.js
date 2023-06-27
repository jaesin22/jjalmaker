import React, { useState } from "react";

const Text = ({ onTextChange }) => {
  const [text, setText] = useState(" ");

  const onChange = (e) => {
    setText(e.target.value);
    onTextChange(e.target.value);
  };

  return (
    <div className="flex mt-10 justify-center">
      <textarea
        rows="4"
        className="w-[800px] text-sm text-white bg-[#222933] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
         dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={onChange}
        value={text}
      ></textarea>
    </div>
  );
};

export default Text;
