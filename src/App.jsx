import React from "react";
import { createRoot } from "react-dom/client";
import Homepage from "./Homepage";
const App = () => {
  return (
    <div>
      Hi
      <Homepage />
    </div>
  );
};

const root = document.querySelector("#root");
const container = createRoot(root);
container.render(<App />);
