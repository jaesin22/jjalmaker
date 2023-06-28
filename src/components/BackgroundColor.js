import React, { useState } from "react";
import { BgColorsOutlined } from "@ant-design/icons";
import { ChromePicker } from "react-color";

const BackgroundColor = ({ onBgColorChange }) => {
  const [bgcolor, setBgColor] = useState("#E9B1BE");
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleColorIconClick = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleColorChange = (e) => {
    setBgColor(e.hex);
    onBgColorChange(e.hex);
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
          fontSize: "22px",
          width: "32px",
          height: "32px",
          border: "1px solid #ffffff",
          borderRadius: "3px",
          color: "#FFFFFF",
        }}
        className="flex items-center justify-center cursor-pointer "
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
