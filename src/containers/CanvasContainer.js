import React from "react";
import { useSelector } from "react-redux";
import Preview from "../Func/Preview";

function CanvasContainer() {
  const { size, fttype, color, text, bgcolor, border, imageUrl } = useSelector(
    (state) => state.bannerInfo
  );

  return (
    <Preview
      size={size}
      fontFamiliy={fttype}
      color={color}
      text={text}
      bgColor={bgcolor}
      border={border}
      imageUrl={imageUrl}
    />
  );
}

export default CanvasContainer;
