import React from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
const DownloadButton = () => {
  return (
    <>
      <Button
        type="primary"
        shape="round"
        icon={<DownloadOutlined />}
        size="large"
      >
        Download
      </Button>
    </>
  );
};
export default DownloadButton;
