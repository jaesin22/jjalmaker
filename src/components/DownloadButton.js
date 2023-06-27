import React, { useContext } from "react";
import CanvasContext from "../Func/CanvasContext";
import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";

const DownloadButton = () => {
  const canvasRef = useContext(CanvasContext);

  const download = () => {
    const url = canvasRef.current.toDataURL();
    const link = document.createElement("a");
    link.href = url;
    link.download = "image.png";
    link.click();
  };

  return (
    <>
      <Button
        type="primary"
        shape="round"
        size="large"
        className="bg-[#4096ff] mt-9 font-semibold flex items-center"
        onClick={download}
      >
        <DownloadOutlined className="mr-1" />
        Download
      </Button>
    </>
  );
};
export default DownloadButton;
