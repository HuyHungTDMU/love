import React from "react";
import { render } from "react-dom";
import { Wave1 } from "./love.js";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Wave1 />
  </div>
);
export default App;
