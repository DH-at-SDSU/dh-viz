import React, { Component } from "react";
import { I18n } from "aws-amplify";
import Amplify from "aws-amplify";
import awsmobile from "../../aws-exports.js";
import { Authenticator } from "aws-amplify-react";
import { ForgotPassword } from "aws-amplify-react/dist/Auth";

Amplify.configure(awsmobile);

const signUpConfig = {
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "Email",
      key: "username",
      required: true,
      displayOrder: 1,
      type: "string",
      custom: false
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 2,
      type: "password",
      custom: false
    }
  ],
  includeGreetings: true
};

const federated = {
  google_client_id: process.env.REACT_APP_GOOGLE_APP_ID
};

const authScreenLabels = {
  en: {
    Username: "Email"
  }
};

I18n.setLanguage("en");
I18n.putVocabularies(authScreenLabels);

class AuthComponent extends Component {
  handleStateChange = state => {
    console.log(state);
    if (state === "signedIn") {
    }
  };
  render() {
    return (
      <Authenticator
        signUpConfig={signUpConfig}
        federated={federated}
        onStateChange={this.handleStateChange}
        hide={[ForgotPassword]}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {};
};

export default AuthComponent;
