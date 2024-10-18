import React from "react";

const Render02 = () => {
  const items = [
    { id: 1, name: "Rutuja" },
    { id: 2, name: "Rushikesh" },
    { id: 3, name: "Anshul" },
  ];
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Render02;
