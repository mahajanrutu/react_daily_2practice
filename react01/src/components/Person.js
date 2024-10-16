import React from "react";

export default function Person(props) {
  return (
    <div>
      <h1>
        <i>Hi, My name is {props.name}</i>
      </h1>
    </div>
  );
}
