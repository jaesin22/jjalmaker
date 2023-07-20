import React from "react";
import Head from "./components/Head";
import FontType from "./components/FontType";
import Text from "./components/Text";
import FontSize from "./components/FontSize";
import FontColor from "./components/FontColor";
import { Space, Divider } from "antd";
import BackgroundColor from "./components/BackgroundColor";
import DownloadButton from "./components/DownloadButton";
import { CanvasProvider } from "./Func/CanvasContext";
import Upload from "./components/Upload";
import CanvasContainer from "./containers/CanvasContainer";

function App() {
  return (
    <div className="bg-[#222933] flex flex-col items-center justify-center min-h-screen min-w-full">
      <header className="mt-4">
        <Head />
      </header>
      <main className="flex flex-col items-center justify-center flex-1">
        <Space>
          <FontColor />
          <FontType />
          <FontSize />
          <Divider type="vertical" className="bg-white" />
          <BackgroundColor />
          <Upload />
        </Space>
        <CanvasProvider>
          <CanvasContainer />
          <Text />
          <DownloadButton />
        </CanvasProvider>
      </main>
    </div>
  );
}

export default App;
