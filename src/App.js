import React, { useState } from "react";
import Head from "./components/Head";
import FontType from "./components/FontType";
import Text from "./components/Text";
import FontSize from "./components/FontSize";
import FontColor from "./components/FontColor";
import FontThickness from "./components/FontThickness";
import FontBorder from "./components/FontBorder";
import Preview from "./Func/Preview";

function App() {
  const [text, setText] = useState(" ");
  const [color, setColor] = useState("#FFFFFF");
  const [selectedFontSize, setSelectedFontSize] = useState(30);
  const [onFontWeight, setonFontWeight] = useState(30);
  const [onFontBorder, setonFontBorder] = useState("black");
  const [onFontType, setonFontType] = useState("SANJUGotgam");

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const handleColorChange = (selectedColor) => {
    setColor(selectedColor);
  };

  const handleFontSizeChange = (onSize) => {
    setSelectedFontSize(onSize);
  };

  const handleFontWeightChange = (onWeight) => {
    setonFontWeight(onWeight);
  };

  const handleFontBorderChange = (onBorder) => {
    setonFontBorder(onBorder);
  };

  const handleFontTypeChange = (onType) => {
    setonFontType(onType);
  };

  return (
    <div>
      <Head />
      <main className="p-5 pl-16">
        <Preview
          text={text}
          color={color}
          size={selectedFontSize}
          thick={onFontWeight}
          border={onFontBorder}
          fontFamiliy={onFontType}
        />
        <Text onTextChange={handleTextChange} />
        <div className="flex w-full">
          <FontType onFontTypeChange={handleFontTypeChange} />
          <FontSize onSize={handleFontSizeChange} />
          <FontColor onColorChange={handleColorChange} />
        </div>
        <div className="flex w-full">
          <FontThickness onFontWeightChange={handleFontWeightChange} />
          <FontBorder onFontBorderChange={handleFontBorderChange} />
        </div>
      </main>
    </div>
  );
}

export default App;

{
  /* <svg
  class="w-6 h-6 text-gray-800 dark:text-white"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 20 19"
>
  <path
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M15 15h.01M4 12H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3m-5.5 0V1.07M5.5 5l4-4 4 4"
  />
</svg>; */
}
