import React, { useContext, useRef } from "react";
import { UploadOutlined } from "@ant-design/icons";
import CanvasContext from "./CanvasContext";
const Upload = () => {
  const canvasRef = useContext(CanvasContext);
  const fileInput = useRef(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const upload = (e) => {
    fileInput.current.click();
  };

  return (
    <>
      <UploadOutlined
        onClick={upload}
        className="flex items-center justify-center cursor-pointer bg-[#222933] text-white"
        style={{
          fontSize: "22px",
          width: "32px",
          height: "32px",
          border: "1px solid #ffffff",
          borderRadius: "3px",
        }}
      />
      <input type="file" ref={fileInput} className="hidden" />
    </>
  );
};

export default Upload;
