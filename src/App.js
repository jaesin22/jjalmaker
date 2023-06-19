import React from "react";
import "./";
import Head from "./components/Head";
import Screen from "./components/Screen";
import FontType from "./components/FontType";

function App() {
  return (
    <div>
      <Head />
      <main className="p-5">
        <Screen />
        <FontType />
      </main>
    </div>
  );
}

export default App;
