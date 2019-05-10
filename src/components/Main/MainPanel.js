import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import Visualization from "../Visualization/Visualization";
import Profile from "../Profile/Profile";
import AuthComponent from "../Auth/AuthComponent";
import AboutUs from "../AboutUs/AboutUs";
import Directory from "../Directory/Directory";
import "./Main.css";

class MainPanel extends Component {
  componentWillMount;

  render() {
    return (
      <div className="main">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/visualization" component={Visualization} />
          <Route path="/directory" component={Directory} />
          <Route path="/profile" component={Profile} />
          <Route path="/auth" component={AuthComponent} />
          <Route path="/about" component={AboutUs} />
        </Switch>
      </div>
    );
  }
}

export default MainPanel;
