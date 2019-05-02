import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from './containers/Navbar';
import UserSignup from './components/UserSignup';
import StartGame from './components/StartGame';
import Login from './components/Login';

export default class App extends Component {
  render() {
    return (
      <div>
        <br />
        <UserSignup />
        <br />
        <Login />
        <br />
        <StartGame />
      </div>
    )
  }
}
