import React from "react";

export default function Form(props) {
  return (
    <div className="form">
      <form onSubmit={props.submit}>
        Name:
        <input type="text" name="name" />
        <br />
        Mobile:
        <input type="tel" name="mobile" />
        <br />
        <input type="submit" Submit />{" "}
      </form>
    </div>
  );
}
