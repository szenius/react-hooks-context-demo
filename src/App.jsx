import React from "react";
import "./App.css";
import { ColorToggle } from "./components/ColorToggle";
import { Ball } from "./components/Ball";
import { Footer } from "./components/Footer";
import { ColorContextProvider } from "./context/ColorContextProvider";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <ColorContextProvider>
        <ColorToggle />
        <Ball />
      </ColorContextProvider>
      <Footer />
    </div>
  );
}

export default App;
