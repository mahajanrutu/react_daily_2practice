import React from "react";

const Render = () => {
  const items = ["HP", "DELL", "ASUS", "LENOVO"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
export default Render;
