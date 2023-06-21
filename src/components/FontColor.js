import React, { useState } from "react";

const FontColor = ({ onColorChange }) => {
  const [color, setColor] = useState("#ff0000");

  const handleColorChange = (e) => {
    setColor(e.target.value);
    onColorChange(e.target.value);
  };

  return (
    <div className="flex flex-row mt-12 w-96">
      <label className="flex-none ml-3">폰트 색상</label>
      <input type="color" onChange={handleColorChange} className="flex ml-3" />
    </div>
  );
};

export default FontColor;
