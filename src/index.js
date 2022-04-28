import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Context from "./context/Context";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Context>
    <App />
  </Context>
);
