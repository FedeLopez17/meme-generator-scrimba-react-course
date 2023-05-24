import React from "react";
import "./Header.css";
import logo from "../assets/troll-face.png";

export default function Header() {
  return (
    <header>
      <img src={logo} />
      <h1>Meme Generator</h1>
      <h3>React Course - Project 3</h3>
    </header>
  );
}
