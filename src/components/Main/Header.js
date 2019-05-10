import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { Auth } from "aws-amplify";
import { sendAuthState, sendAuthUID } from "../../redux/auth/authActions";
import { getAuthState } from "../../redux/auth/authSelectors";
import "./Main.css";
import dhLogo from "../../images/dhlogo.png";

class Header extends Component {
  state = {};

  componentWillMount() {
    //this.checkUser();
  }

  handleSignOut = () => {
    console.log(this.props);
    const { sendAuthState, sendAuthUID } = this.props;

    Auth.signOut()
      .then(data => {
        console.log(data);
        sendAuthState();
        sendAuthUID();
      })
      .catch(err => console.log(err));
  };

  render() {
    const { authState } = this.props;
    return (
      <div className="head">
        <img className="head-logo" src={dhLogo} alt="Digital Humanities Logo" />
        <div className="head-box">
          <span className="head-content">
            <NavLink activeClassName="link" to={"/"}>
              Home
            </NavLink>
            <NavLink activeClassName="link" to={"/visualization"}>
              Visualization
            </NavLink>
            <NavLink activeClassName="link" to={"/directory"}>
              Directory
            </NavLink>
            {authState === "signedIn" ? (
              <NavLink activeClassName="link" to={"/profile"}>
                Profile
              </NavLink>
            ) : (
              ""
            )}
            <NavLink activeClassName="link" to={"/about"}>
              About Us
            </NavLink>
            {authState === "signedIn" ? (
              <a className="link" onClick={this.handleSignOut}>
                Sign Out
              </a>
            ) : (
              <NavLink activeClassName="link" to={"/auth"}>
                Login/Sign Up
              </NavLink>
            )}
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authState: getAuthState(state)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      sendAuthState,
      sendAuthUID
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
