import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  /* constructor(props) {
    super(props);
    this._validAuthStates = ['signedIn'];
  } */

  render() {
    return (
      <header>
        <h1>DH-Viz Header</h1>
        <Link to={"/"}>Home </Link>
        <Link to={"/viz"}>Visualization </Link>
        <Link to={"/profile"}>Profile</Link>
      </header>
    );
  }
}

export default Header;
