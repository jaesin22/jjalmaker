import React, { useEffect, useContext, useMemo, useState } from "react";
import FontFaceObserver from "fontfaceobserver";
import CanvasContext from "./CanvasContext";
import "../styles/App.css";
type PreviewProps = {
  text: string;
  color: string;
  size: number;
  border: string;
  fontFamiliy: string;
  bgColor: string;
  imageUrl: string;
};
const Preview = ({
  text,
  color,
  size,
  border,
  fontFamiliy,
  bgColor,
  imageUrl,
}: PreviewProps) => {
  const canvasRef = useContext(CanvasContext);
  const lineHeight = size * 1.4;
  const [fontLoaded, setFontLoaded] = useState(false);

  const drawCanvas = useMemo(() => {
    return () => {
      const canvas = canvasRef?.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return; // canvas나 ctx가 유효하지 않은 경우 빠른 반환

      const lines = text.split("\n");

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      // 초기화
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const drawText = (ctx: CanvasRenderingContext2D, lines: string[]) => {
        ctx.font = `${size}px ${fontFamiliy}`;
        ctx.fillStyle = color;
        ctx.textAlign = "center";
        ctx.strokeStyle = border;
        if (!canvasRef.current) return;
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
        // 이미지 배경인 경우
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
          ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
          drawText(ctx, lines);
        };
      } else {
        // 색상 배경인 경우
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
    if (canvasRef?.current && fontLoaded) {
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
