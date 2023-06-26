import React, { useState } from "react";
import Head from "./components/Head";
import FontType from "./components/FontType";
import Text from "./components/Text";
import FontSize from "./components/FontSize";
import FontColor from "./components/FontColor";
// import FontThickness from "./components/FontThickness";
// import FontBorder from "./components/FontBorder";
import Preview from "./Func/Preview";
import { Space, Divider } from "antd";
import BackgroundColor from "./components/BackgroundColor";

function App() {
  const [text, setText] = useState("Sample Text");
  const [color, setColor] = useState("#FFFFFF");
  const [selectedFontSize, setSelectedFontSize] = useState(40);
  const [onFontWeight, setonFontWeight] = useState(30);
  const [onFontBorder, setonFontBorder] = useState("transparent");
  const [onFontType, setonFontType] = useState("SANJUGotgam");
  const [bgcolor, setBgColor] = useState("#E9B1BE");

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const handleColorChange = (selectedColor) => {
    setColor(selectedColor);
  };

  const handleBgColorChange = (selectBgColor) => {
    setBgColor(selectBgColor);
  };

  const handleFontSizeChange = (onSize) => {
    setSelectedFontSize(onSize);
  };

  // const handleFontWeightChange = (onWeight) => {
  //   setonFontWeight(onWeight);
  // };

  // const handleFontBorderChange = (onBorder) => {
  //   setonFontBorder(onBorder);
  // };

  const handleFontTypeChange = (onType) => {
    setonFontType(onType);
  };

  return (
    <div className="bg-[#222933] h-full">
      <Head />
      <main className="p-5 pl-16 h-full flex flex-col items-center ">
        <Space className="justify-center items-center">
          <FontColor onColorChange={handleColorChange} />
          <FontType onFontTypeChange={handleFontTypeChange} />
          <FontSize onSize={handleFontSizeChange} />
          <Divider type="vertical" className="bg-white" />
          <BackgroundColor onBgColorChange={handleBgColorChange} />
        </Space>
        <Preview
          text={text}
          color={color}
          size={selectedFontSize}
          thick={onFontWeight}
          border={onFontBorder}
          fontFamiliy={onFontType}
          bgColor={bgcolor}
        />
        <Text onTextChange={handleTextChange} />
        {/* <div className="flex w-full">
          <FontThickness onFontWeightChange={handleFontWeightChange} />
          <FontBorder onFontBorderChange={handleFontBorderChange} />
        </div> */}
      </main>
    </div>
  );
}

export default App;
