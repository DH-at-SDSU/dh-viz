import React, { Component } from 'react';

class UserList extends Component {
    state = { users: [] }

    componentDidMount = () => {
        this.getUsers()
      }
    getItems = () => {
        API.graphql(graphqlOperation(queries.listItems))
        .then(data => this.setState({users: data.data.listItems.items}))
      };

    render() { 
        return (<div></div>);
    }
}
 
export default UserList;