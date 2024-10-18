import React, { Component } from "react";

class RenderConditional4 extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  toggleLogin = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };

  render() {
    const { isLoggedIn } = this.state;
    let message;

    if (isLoggedIn) {
      message = <h1>Welcome Back!</h1>;
    } else {
      message = <h1>plese login.</h1>;
    }

    return (
      <div>
        {message}
        <button onClick={this.toggleLogin}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    );
  }
}
export default RenderConditional4;
