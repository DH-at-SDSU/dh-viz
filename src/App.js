import React, { Component } from "react";
import Header from "./components/Main/Header";
import MainPanel from "./components/Main/MainPanel";
import Amplify, { Auth } from 'aws-amplify';
import awsmobile from './aws-exports';
import { Authenticator } from 'aws-amplify-react';

Amplify.configure(awsmobile);

const signUpConfig = {
  hiddenDefaults: ["phone_number"]
}

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