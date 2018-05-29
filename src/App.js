import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {id: 1, name: "mec", email: "test@mec.com"},
        {id: 2, name: "test", email: "test@test.es"}
      ]
    };
  }

  handleOnAddUser (event) {
    event.preventDefault();
    let user = {
      name: event.target.name.value,
      email: event.target.email.value
    };
    this.setState({
      users: this.state.users.concat([user])
    });
  }

  render() {
    return (
      <div>
        <UserList users={this.state.users}/>
        <UserForm onAddUser={this.handleOnAddUser.bind(this)} />
      </div>
    );
  }
}

export default App;
