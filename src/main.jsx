import { React } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <div>
    <p id="small-screen-warning">
      Your screen is too small to display this content. Please use a larger
      device.
    </p>

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);
