import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import Visualization from "../Visualization/Visualization";
import Profile from "../Profile/Profile";

class MainPanel extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/visualization" component={Visualization} />
        <Route path="/profile" component={Profile} />
      </Switch>
    );
  }
}

export default MainPanel;
