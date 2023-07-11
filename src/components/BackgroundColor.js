import React, { useState } from "react";
import { BgColorsOutlined } from "@ant-design/icons";
import { ChromePicker } from "react-color";
import { bg_Color } from "../reducers/font";
import { useSelector, useDispatch } from "react-redux";

const BackgroundColor = () => {
  const dispatch = useDispatch();

  const { bgcolor } = useSelector((state) => state.bannerInfo);

  const handleColorChange = (e) => {
    // store에 있는 state 바꾸는 함수 실행
    dispatch(bg_Color(e.hex));
  };

  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleColorIconClick = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleClose = () => {
    setShowColorPicker(false);
  };

  return (
    <div>
      <BgColorsOutlined
        onClick={handleColorIconClick}
        style={{
          backgroundColor: bgcolor,
          border: "1px solid #ffffff",
          borderRadius: "3px",
          color: "#FFFFFF",
        }}
        className="flex items-center justify-center cursor-pointer 
        text-lg w-7 h-7 lg:text-[20px] lg:w-8 lg:h-8"
      />
      {showColorPicker && (
        <div className="absolute">
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
          <ChromePicker color={bgcolor} onChange={handleColorChange} />
        </div>
      )}
    </div>
  );
};

export default React.memo(BackgroundColor);
