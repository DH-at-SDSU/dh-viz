import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
class UserList extends Component {
  state = { users: [] };

  componentDidMount = () => {
    this.getUsers();
  };

  getUsers = () => {
    API.graphql(graphqlOperation(queries.listUsers)).then(data =>
      this.setState({ users: data.data.listUsers.items })
    );
  };

  renderList = items => {
    return items.map(item => {
      const { uid, name, jobTitle } = item;
      return (
        <div key={uid}>
          {uid}
          {name}
          {jobTitle}
        </div>
      );
    });
  };

  render() {
    const { users } = this.state;
    return (
      <div>{users ? this.renderList(users) : <p>Loading User List...</p>}</div>
    );
  }
}

export default UserList;
