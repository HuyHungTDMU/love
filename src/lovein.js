import React from "react";
import { render } from "react-dom";
import { Wave1 } from "./love.js";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <h1>Examples of react-animated-text:</h1>
    <Wave1 />
  </div>
);
export default App;
