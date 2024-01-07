import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CloudinaryContext } from "cloudinary-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CloudinaryContext cloudName="dtfpfapbp">
      <App />
    </CloudinaryContext>
  </React.StrictMode>
);
