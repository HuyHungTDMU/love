import React from "react";
import "./styles.css";
import ParticleImage, { forces, Vector } from "react-particle-image";
import Indexx from "./indexx";
import Love from "./lovein";
const src =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Love_Heart_SVG.svg/645px-Love_Heart_SVG.svg.png";

export default function App() {
  return (
    <div className="App" style={{ backgroundColor: "#000" }}>
      <h1 style={{ color: "#fff" }}>I LOVE U</h1>
      <ParticleImage
        scale={0.5}
        maxParticles={5000}
        backgroundColor="#000"
        src={src}
        mouseMoveForce={(x, y) => forces.disturbance(x, y, 6)}
        touchMoveForce={(x, y) => forces.disturbance(x, y, 6)}
        mouseDownForce={(x, y) => forces.disturbance(x, y, 50)}
        particleOptions={{
          mass: () => 40,
          filter: ({ x, y, image }) => {
            const pixel = image.get(x, y);
            return pixel.r === 255;
          },
          color: () => "pink",
          friction: () => 0.15,
          initialPosition: ({ canvasDimensions }) => {
            return new Vector(
              canvasDimensions.width / 9,
              canvasDimensions.height / 2
            );
          }
        }}
      />
      <div>
        <Love />
      </div>
      <div style={{ backgroundColor: "#000" }}>
        <Indexx />
      </div>
    </div>
  );
}
