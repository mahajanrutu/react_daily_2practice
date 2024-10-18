import React from "react";

const Render3 = () => {
  const data = [
    {
      category: "Car",
      items: ["Kia", "Mahindra", "Toyota", "Tata"],
    },
    {
      category: "Bike",
      items: ["Ninja", "Royal Enfeild", "Himalaya"],
    },
  ];
  return (
    <div>
      {data.map((category) => (
        <div key={category.category}>
          <h3>{category.category}</h3>
          <ul>
            {category.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default Render3;
