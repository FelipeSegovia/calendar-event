import { StrictMode } from "react";
import App from "./App";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
