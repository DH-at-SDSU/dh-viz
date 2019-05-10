import React, { Component } from "react";
import Header from "./components/Main/Header";
import MainPanel from "./components/Main/MainPanel";
class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <MainPanel />
      </div>
    );
  }
}

export default App;
