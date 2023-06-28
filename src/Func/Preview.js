import React, { useEffect, useContext, useMemo } from "react";
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
  imageUrl,
}) => {
  const canvasRef = useContext(CanvasContext);
  const lineHeight = 40;

  const drawCanvas = useMemo(() => {
    return () => {
      const canvas = canvasRef.current;
      if (!canvas) return; // canvas가 유효하지 않은 경우 빠른 반환

      const ctx = canvas.getContext("2d");
      const lines = text.split("\n");

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      // 초기화
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const drawText = (ctx, lines) => {
        ctx.font = `${thick} ${size}px ${fontFamiliy}`;
        ctx.fillStyle = color;
        ctx.textAlign = "center";
        ctx.strokeStyle = border;

        let canvasCenterX = canvasRef.current.width / 2;
        let canvasCenterY = canvasRef.current.height / 2;

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          ctx.fillText(line, canvasCenterX, canvasCenterY);
          ctx.strokeText(line, canvasCenterX, canvasCenterY);
          canvasCenterY += lineHeight;
        }
      };

      if (imageUrl) {
        // 이미지가 있을 경우 이미지를 배경으로 그림
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
          ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);

          // 이미지 로드 후 텍스트 그리기
          drawText(ctx, lines);
        };
      } else {
        // 이미지가 없을 경우 배경을 채우고 텍스트 그리기
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        drawText(ctx, lines);
      }
    };
  }, [
    text,
    color,
    size,
    thick,
    border,
    fontFamiliy,
    bgColor,
    imageUrl,
    canvasRef,
    lineHeight,
  ]);

  useEffect(() => {
    if (canvasRef.current) {
      drawCanvas();
    }
  }, [canvasRef, drawCanvas]);

  return (
    <div className="flex justify-center mt-3">
      <canvas ref={canvasRef} width={700} height={350} />
    </div>
  );
};

export default Preview;
