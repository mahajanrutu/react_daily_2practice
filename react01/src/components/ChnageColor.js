import React, { useState } from "react";

export default function ChnageColor() {
  //initialization
  const [color, setColor] = useState("black");
  const [clickcount, setClickCount] = useState(0);

  //using functional component to chnge color
  const changeColor = () => {
    if (color === "black") {
      setColor("grey");
    } else if (color === "grey") {
      setColor("green");
    } else {
      setColor("black");
    }

    setClickCount(clickcount + 1);
  };

  return (
    <div>
      <h1 style={{ color: color }}>Rutuja</h1>
      <button onClick={changeColor}>Change Color</button>
      <p style={{ color: "white" }}>Button Clicked: {clickcount} times</p>
    </div>
  );
}
