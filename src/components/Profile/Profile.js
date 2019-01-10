import React, { Component } from "react";

class Profile extends Component {
  state = {};
  render() {
    return (
      <div>
        <h3>Profile placeholder</h3>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Title:
            <input type="text" name="title" />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Profile;
