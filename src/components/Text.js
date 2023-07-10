import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "../reducers/font";
const Text = () => {
  const dispatch = useDispatch();

  const { text } = useSelector((state) => state.bannerInfo);

  const changeText = (e) => {
    // store에 있는 state 바꾸는 함수 실행
    dispatch(setText(e.target.value));
  };

  return (
    <div className="flex mt-4 justify-center">
      <textarea
        rows="4"
        className="w-[700px] text-sm text-white bg-[#222933] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
         dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={changeText}
        value={text}
      ></textarea>
    </div>
  );
};

export default Text;
