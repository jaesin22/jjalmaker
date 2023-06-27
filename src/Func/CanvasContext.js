import React, { createContext, useRef } from "react";

const CanvasContext = createContext(null);

export function CanvasProvider({ children }) {
  const canvasRef = useRef(null);

  return (
    <CanvasContext.Provider value={canvasRef}>
      {children}
    </CanvasContext.Provider>
  );
}

export default CanvasContext;
