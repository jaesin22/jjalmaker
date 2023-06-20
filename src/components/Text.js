import React from "react";

const Text = () => {
  return (
    <div className="flex mt-10">
      <label className="flex-none mr-3 pt-5">텍스트</label>
      <textarea
        id="message"
        rows="4"
        class="p-2.5 w-full ml-5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
         dark:focus:ring-blue-500 dark:focus:border-blue-500"
      ></textarea>
    </div>
  );
};

export default Text;
