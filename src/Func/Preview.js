import React, { useRef, useEffect } from "react";
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
  console.log(fontFamiliy);
  const canvasRef = useRef(null);
  const lineHeight = 40;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const lines = text.split("\n");

    // 캔버스 크기 가져오기
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // 캔버스 초기화
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 배경 중앙 좌표 계산
    const backgroundWidth = canvasWidth; // 배경 너비 설정
    const backgroundHeight = canvasHeight; // 배경 높이 설정
    const backgroundX = (canvasWidth - backgroundWidth) / 2; // 배경의 x 좌표 계산
    const backgroundY = (canvasHeight - backgroundHeight) / 2; // 배경의 y 좌표 계산

    // 배경색 설정
    ctx.fillStyle = bgColor;
    ctx.fillRect(backgroundX, backgroundY, backgroundWidth, backgroundHeight);

    // 글꼴 및 글자색 설정
    ctx.font = `${thick} ${size}px ${fontFamiliy}`;

    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.strokeStyle = border;

    // 글자를 캔버스 가운데에 위치시킴
    let canvasCenterX = canvas.width / 2;

    let canvasCenterY = canvas.height / 2;
    // ctx.fillText(text, canvasCenterX, canvasCenterY);
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      ctx.fillText(line, canvasCenterX, canvasCenterY);
      ctx.strokeText(line, canvasCenterX, canvasCenterY);
      canvasCenterY += lineHeight;
    }
    //ctx.strokeText(text, canvasCenterX, canvasCenterY);
  }, [text, color, size, thick, border, fontFamiliy, bgColor]);

  return (
    <div className="flex justify-center mt-3">
      <canvas ref={canvasRef} width={800} height={350} />
    </div>
  );
};

export default Preview;
