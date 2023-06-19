import React from "react";
import "./";
import Head from "./components/Head";
import Screen from "./components/Screen";
import FontType from "./components/FontType";
import FontColor from "./components/FontColor";

function App() {
  return (
    <div>
      <Head />
      <main className="p-5">
        <Screen />
        <FontType />
        <FontColor />
      </main>
    </div>
  );
}

export default App;
