import React, { useEffect, useContext, useMemo, useState } from "react";
import FontFaceObserver from "fontfaceobserver";
import CanvasContext from "./CanvasContext";
import "../styles/App.css";

const Preview = ({
  text,
  color,
  size,
  border,
  fontFamiliy,
  bgColor,
  imageUrl,
}) => {
  const canvasRef = useContext(CanvasContext);
  const lineHeight = 40;
  const [fontLoaded, setFontLoaded] = useState(false);

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
        ctx.font = `${size}px ${fontFamiliy}`;
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
    border,
    fontFamiliy,
    bgColor,
    imageUrl,
    canvasRef,
    lineHeight,
  ]);

  useEffect(() => {
    const font = new FontFaceObserver(fontFamiliy);
    font.load().then(() => {
      setFontLoaded(true);
    });
  }, [fontFamiliy]);

  useEffect(() => {
    if (canvasRef.current && fontLoaded) {
      drawCanvas();
    }
  }, [canvasRef, drawCanvas, fontLoaded]);

  return (
    <div className="flex justify-center mt-3">
      <canvas
        ref={canvasRef}
        width={700}
        height={350}
        className="w-[350px] h-[200px] md:w-[550px] md:h-[275px] lg:w-[700px] lg:h-[350px]"
      />
    </div>
  );
};

export default Preview;
