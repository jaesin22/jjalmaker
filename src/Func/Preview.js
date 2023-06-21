import React, { useRef, useEffect } from "react";

const Preview = ({ setText, setColor }) => {
  console.log(setText, setColor);
  const canvasRef = useRef(null);

  const setFont = (canvas, args) => {
    const ctx = canvas.getContext("2d");
    const { setColor = "#000000", size, font } = args;
    ctx.font = `${size}px ${font}`;
    ctx.fillStyle = setColor;
    ctx.fillText(setText, canvas.width / 2, canvas.height / 2);
  };

  //   useEffect(() => {
  //     const canvas = canvasRef.current;
  //     const ctx = canvas.getContext("2d");
  //     const { color, text } = text;

  //     ctx.fillStyle = color;
  //     ctx.fillRect(0, 0, canvas.width, canvas.height);

  //     setFont(canvas, text, {
  //       color: "white",
  //       size: "40",
  //       font: "Arial",
  //     });
  //   }, [text]);

  // 컴포넌트의 나머지 로직과 렌더링을 작성하세요.

  return (
    <canvas ref={canvasRef} />
    // JSX로 컴포넌트의 렌더링을 작성하세요.
  );
};

export default Preview;
