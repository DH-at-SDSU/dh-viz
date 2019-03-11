import React, { Component } from "react";
import Header from "./components/Main/Header";
import MainPanel from "./components/Main/MainPanel";
import Amplify, { Auth } from 'aws-amplify';
import awsmobile from './aws-exports';
import { authconfig, signUpConfig } from "./authConfig";
import { Authenticator } from 'aws-amplify-react';

Amplify.configure(awsmobile);
Amplify.configure(authconfig);

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainPanel />
        <Authenticator signUpConfig={signUpConfig} />
      </div>
    );
  }
}

export default App;