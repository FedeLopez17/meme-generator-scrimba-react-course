import React from "react";
import Header from "./components/Header.jsx";
import Meme from "./components/Meme.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Meme />
    </div>
  );
}
