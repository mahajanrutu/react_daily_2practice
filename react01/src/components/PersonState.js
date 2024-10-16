import React, { useState } from "react";

export default function PersonState() {
  const [count, setcount] = useState(0);
  return (
    <div>
      <p>You have clicked {count}</p>
      <button onClick={() => setcount(count + 1)}>incress the value</button>
      <button onClick={() => setcount(count - 1)}>decress the value</button>
    </div>
  );
}
