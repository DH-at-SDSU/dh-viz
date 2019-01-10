import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import Viz from "../Visualization/Visualization";
import Profile from "../Profile/Profile";

class MainPanel extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/viz" component={Viz} />
        <Route path="/profile" component={Profile} />
      </Switch>
    );
  }
}

export default MainPanel;
