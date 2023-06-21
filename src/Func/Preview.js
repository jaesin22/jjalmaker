import React, { useRef, useEffect } from "react";

const Preview = ({ text, color, size, thick, border }) => {
  console.log(text, color, size, thick, border);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // 캔버스 크기 가져오기
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // 캔버스 초기화
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 배경 중앙 좌표 계산
    const backgroundWidth = canvasWidth * 0.8; // 배경 너비 설정
    const backgroundHeight = canvasHeight * 0.8; // 배경 높이 설정
    const backgroundX = (canvasWidth - backgroundWidth) / 2; // 배경의 x 좌표 계산
    const backgroundY = (canvasHeight - backgroundHeight) / 2; // 배경의 y 좌표 계산

    // 배경색 설정
    ctx.fillStyle = "#BE2D2D";
    ctx.fillRect(backgroundX, backgroundY, backgroundWidth, backgroundHeight);

    // 글꼴 및 글자색 설정
    ctx.font = `${thick} ${size}px Arial`;
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.strokeStyle = border;

    // 글자를 캔버스 가운데에 위치시킴
    const canvasCenterX = canvas.width / 2;
    const canvasCenterY = canvas.height / 2;
    ctx.fillText(text, canvasCenterX, canvasCenterY);
    ctx.strokeText(text, canvasCenterX, canvasCenterY);
  }, [text, color, size, thick, border]);

  // 컴포넌트의 나머지 로직과 렌더링을 작성하세요.

  return (
    <div className="flex items-center text-center justify-center">
      <canvas ref={canvasRef} width={1024} height={768} />
    </div>
  );
};

export default Preview;
