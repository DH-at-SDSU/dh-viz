import React, { Component } from "react";
import Header from "./components/Main/Header";
import MainPanel from "./components/Main/MainPanel";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainPanel />
      </div>
    );
  }
}

export default App;
