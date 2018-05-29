import React, { Component } from 'react';
import User from './User';

class UserList extends Component {
  render() {
    return (
      <ul>
        {this.props.users.map(user => {
          return (
            <User
            key={user.id}
            name={user.name}
            email={user.email}
            />
          );
        })}
      </ul>
    );
  }
}

export default UserList;
