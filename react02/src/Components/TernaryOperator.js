import React from "react";

const TernaryOperator = (props) => {
  const isLoggedIn = props.isLoggedIn;
  return (
    <div>{isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please login...</h1>}</div>
  );
};
export default TernaryOperator;
