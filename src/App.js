import React from "react";
import "./";
import Head from "./components/Head";
import Screen from "./components/Screen";
import FontType from "./components/FontType";
import Text from "./components/Text";

function App() {
  return (
    <div>
      <Head />
      <main className="p-5 pl-16">
        <Screen />
        <Text />
        <FontType />
      </main>
    </div>
  );
}

export default App;
