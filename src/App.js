import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from './containers/Navbar';
import UserSignup from './components/UserSignup';
import StartGame from './components/StartGame';
import Login from './components/Login';
import LocationRequester from './components/LocationRequester';
import Dashboard from './containers/Dashboard';
import CreateGame from './components/CreateGame';

const API = "http://localhost:3000/users"

export default class App extends Component {

  state = {
    latitude: null,
    longitude: null,
    timestamp: null,
    currentuser: null
  }

  getLocationData = (position) => {
    if (position.coords) {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        timestamp: position.timestamp
      })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return ((Math.abs(nextState.latitude - this.state.latitude) + Math.abs(nextState.longitude - this.state.longitude)) > .00000001 || this.state.currentuser !== nextState.currentuser)
  }

  componentDidUpdate() {
    const { longitude, latitude, currentuser, timestamp } = this.state
    if (longitude && currentuser) {
      fetch(API + `/${currentuser.id}/locate`, {
        method: 'PATCH',
        body: JSON.stringify({ latitude, longitude, timestamp }),
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(res => res.json())
        .then(data => console.log("Location was sent to your murderer at:", data))
    }
  }

  loginUser = (user) => {
    this.setState({ currentuser: user })
  }

  leaveGame = (e, id) => {
    e.preventDefault()
    console.log(e);
    console.log(id);
    const user = { id: id }
    fetch(API + `/${id}/leave_game`, {
      method: 'PATCH',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(user => this.setState({ currentuser: user }))
  }

  render() {
    return (
      <div>
        <LocationRequester getLocationData={this.getLocationData} />
        <br />
        {this.state.currentuser ? null : <UserSignup />}
        <br />
        <Login loginUser={this.loginUser} />
        <br />
        <CreateGame />
        <br />
        {this.state.currentuser ? <StartGame currentuser={this.state.currentuser} /> : null}
        <br />
        {this.state.currentuser ? <Dashboard currentuser={this.state.currentuser} leaveGame={this.leaveGame} /> : null}
      </div>
    )
  }
}
