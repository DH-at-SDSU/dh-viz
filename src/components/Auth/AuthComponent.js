import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Amplify, { Auth } from "aws-amplify";
import { Authenticator } from "aws-amplify-react";
import { I18n } from "aws-amplify";
import awsmobile from "../../aws-exports.js";
import { sendAuthState, sendAuthUID } from "../../redux/auth/authActions";
import { getAuthState, getAuthUID } from "../../redux/auth/authSelectors";
import "./Auth.css";

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

const authTheme = {
  button: { "background-color": "#b50000" }
};

I18n.setLanguage("en");
I18n.putVocabularies(authScreenLabels);

class AuthComponent extends Component {
  state = {};

  handleStateChange = state => {
    const { sendAuthState, sendAuthUID } = this.props;

    if (state === "signedIn") {
      Auth.currentAuthenticatedUser({ bypassCache: false }).then(user => {
        sendAuthState(state);
        sendAuthUID(user.id.split(":")[1]);
      });
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <Authenticator
        signUpConfig={signUpConfig}
        federated={federated}
        theme={authTheme}
        onStateChange={this.handleStateChange}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    authState: getAuthState(state),
    authUID: getAuthUID(state)
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
)(AuthComponent);
