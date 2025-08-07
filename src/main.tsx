import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import LetterGlitch from "./blocks/Backgrounds/LetterGlitch/LetterGlitch";
import "./index.css";
import { LETTER_GLITCH_PROPS } from "./lib/consts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LetterGlitch {...LETTER_GLITCH_PROPS} />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
