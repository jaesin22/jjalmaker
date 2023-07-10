import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Preview from "../Func/Preview";

function CanvasContainer() {
  const { size, type, color, text } = useSelector((state) => state.bannerInfo);

  return <Preview size={size} fontFamiliy={type} color={color} text={text} />;
}

export default CanvasContainer;
