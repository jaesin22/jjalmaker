import React, { ReactNode, createContext, useRef } from "react";

type CanvasContextType = React.RefObject<HTMLCanvasElement>;
const CanvasContext = createContext<CanvasContextType | null>(null);

interface Props {
  children: ReactNode;
}

export function CanvasProvider({ children }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <CanvasContext.Provider value={canvasRef}>
      {children}
    </CanvasContext.Provider>
  );
}

export default CanvasContext;
