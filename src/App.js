import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from './containers/Navbar';
import UserSignup from './components/UserSignup';
import StartGame from './components/StartGame';

export default class App extends Component {
  render() {
    return (
      <div>
        <br></br>
        <UserSignup />
        <br />
        <StartGame />
      </div>
    )
  }
}
