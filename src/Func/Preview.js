import React, { useEffect, useContext } from "react";
import CanvasContext from "./CanvasContext";
import "../styles/App.css";

const Preview = ({
  text,
  color,
  size,
  thick,
  border,
  fontFamiliy,
  bgColor,
}) => {
  const canvasRef = useContext(CanvasContext);
  const lineHeight = 40;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const lines = text.split("\n");

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // 초기화
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 배경 중앙 좌표 계산
    const backgroundWidth = canvasWidth;
    const backgroundHeight = canvasHeight;
    const backgroundX = (canvasWidth - backgroundWidth) / 2; // 배경의 x 좌표 계산
    const backgroundY = (canvasHeight - backgroundHeight) / 2; // 배경의 y 좌표 계산

    ctx.fillStyle = bgColor;
    ctx.fillRect(backgroundX, backgroundY, backgroundWidth, backgroundHeight);

    ctx.font = `${thick} ${size}px ${fontFamiliy}`;

    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.strokeStyle = border;

    let canvasCenterX = canvas.width / 2;
    let canvasCenterY = canvas.height / 2;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      ctx.fillText(line, canvasCenterX, canvasCenterY);
      ctx.strokeText(line, canvasCenterX, canvasCenterY);
      canvasCenterY += lineHeight;
    }
  }, [text, color, size, thick, border, fontFamiliy, bgColor, canvasRef]);

  return (
    <div className="flex justify-center mt-3">
      <canvas ref={canvasRef} width={700} height={350} />
    </div>
  );
};

export default Preview;
