import React from "react";
import "./";
import Head from "./components/Head";
import Screen from "./components/Screen";
import FontType from "./components/FontType";
import Text from "./components/Text";
import FontSize from "./components/FontSize";
import FontColor from "./components/FontColor";
import FontThickness from "./components/FontThickness";
import FontBorder from "./components/FontBorder";
import Preview from "./Func/Preview";

function App() {
  return (
    <div>
      <Head />
      <main className="p-5 pl-16">
        <Screen />
        <Text />
        <Preview />
        <div className="flex w-full">
          <FontType />
          <FontSize />
          <FontColor />
        </div>
        <div className="flex w-full">
          <FontThickness />
          <FontBorder />
        </div>
      </main>
    </div>
  );
}

export default App;
