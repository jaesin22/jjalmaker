import React, { useContext, useCallback } from "react";
import CanvasContext from "../Func/CanvasContext";
import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

const DownloadButton = React.memo(() => {
  const canvasRef = useContext(CanvasContext);

  const download = useCallback(async () => {
    if (canvasRef?.current) {
      const canvas = canvasRef.current;
      const dataUrl = await html2canvas(canvas, {
        backgroundColor: "transparent",
      }).then((canvas) => canvas.toDataURL());

      const blob = dataURItoBlob(dataUrl);
      saveAs(blob, "image.png");
    }
  }, [canvasRef]);

  const dataURItoBlob = (dataURI: any) => {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
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
});
export default DownloadButton;
