import React, { useState } from "react";
import { FontColorsOutlined } from "@ant-design/icons";
import { ChromePicker, ColorResult } from "react-color";
import { useDispatch } from "react-redux";
import { fontColor } from "../reducers/font";

const FontColor = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState("#ff0000");

  const changeColor = (e: ColorResult) => {
    // store에 있는 state 바꾸는 함수 실행
    dispatch(fontColor(e.hex));
    setColor(e.hex);
  };

  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleColorIconClick = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleClose = () => {
    setShowColorPicker(false);
  };

  return (
    <>
      <FontColorsOutlined
        onClick={handleColorIconClick}
        className="flex items-center justify-center cursor-pointer 
        text-lg w-7 h-7 lg:text-[22px] lg:w-8 lg:h-8"
        style={{
          color: color,
          backgroundColor: "#ffffff",
          border: "1px solid #ffffff",
          borderRadius: "3px",
        }}
      />
      {showColorPicker && (
        <div className="absolute mx-1">
          <div
            style={{
              position: "fixed",
              top: "0",
              right: "0",
              bottom: "0",
              left: "0",
            }}
            onClick={handleClose}
          />
          <ChromePicker color={color} onChange={changeColor} />
        </div>
      )}
    </>
  );
};

export default React.memo(FontColor);
