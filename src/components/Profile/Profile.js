import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from '../../graphql/mutations';

class Profile extends Component {
  state = {};

  handleChange = itemName => event => {
    this.setState({
      [itemName]: event.target.value
    })
  };

  handleSubmit = event => {
    var userDetails = {
      uid: this.state.uid,
      name: this.state.name,
      jobTitle: this.state.jobTitle
    }

    console.log("User Details : " + JSON.stringify(userDetails))
    API.graphql(graphqlOperation(mutations.createUser, {input: userDetails}))
    event.preventDefault();
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h3>Profile placeholder</h3>
        <form>
          <label>
            UID:
            <input type="text" name="uid" onChange={this.handleChange("uid")} />
          </label>
          <br />
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleChange("name")} />
          </label>
          <br />
          <label>
            Title:
            <input type="text" name="jobTitle" onChange={this.handleChange("jobTitle")} />
          </label>
          <br />
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default Profile;
