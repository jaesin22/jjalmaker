import React, { useState } from "react";
import { FontColorsOutlined } from "@ant-design/icons";
import { ChromePicker } from "react-color";

const FontColor = ({ onColorChange }) => {
  const [color, setColor] = useState("#ff0000");
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleColorIconClick = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleColorChange = (e) => {
    setColor(e.hex);
    onColorChange(e.hex);
  };

  const handleClose = () => {
    setShowColorPicker(false);
  };

  return (
    <div className="flex flex-row mt-12 w-96">
      <FontColorsOutlined
        onClick={handleColorIconClick}
        color={color}
        className=" absolute"
      />
      {showColorPicker && (
        <div className="absolute mt-5">
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
          <ChromePicker color={color} onChange={handleColorChange} />
        </div>
      )}
    </div>
  );
};

export default FontColor;
