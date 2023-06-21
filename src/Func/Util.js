export const setCanvasFont = (canvas, params) => {
  const ctx = canvas.getContext("2d");
  const { color, size } = params;
  ctx.font = `${50}px`;
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
};
