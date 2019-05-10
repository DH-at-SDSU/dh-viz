import React, { Component } from "react";
import { Auth } from "aws-amplify";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    authCode: ""
  };

  handleChange = itemName => event => {
    this.setState({
      [itemName]: event.target.value
    });
  };

  signUp = () => {
    const { email, password } = this.state;
    Auth.signUp({
      username: email,
      password,
      attributes: {
        email
      }
    })
      .then(() => console.log("signed up"))
      .catch(err => console.log("err signing up:" + err));
  };

  confirmSignUp = () => {
    Auth.confirmSignUp(this.state.username, this.state.authCode)
      .then(() => console.log("confirmed sign up"))
      .catch(() => console.log("couldn't confirm signup"));
  };

  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <input
          placeholder="Email"
          type="email"
          onChange={this.handleChange("email")}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={this.handleChange("password")}
        />
        <button onClick={this.signUp}>
          <span>Sign Up</span>
        </button>
        <input
          placeholder="Authentication Code"
          onChange={this.handleChange("authCode")}
        />
        <button onClick={this.confirmSignUp}>
          <span>Confirm Sign Up</span>
        </button>
      </div>
    );
  }
}

export default SignUp;
