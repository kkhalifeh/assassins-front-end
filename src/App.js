import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from './containers/Navbar';
import UserSignup from './components/UserSignup';
import StartGame from './components/StartGame';
import Login from './components/Login';
import LocationRequester from './components/LocationRequester';

const API = "https://murder-with-friends.herokuapp.com/users"

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
    const {longitude, latitude, currentuser, timestamp} = this.state
    if (longitude && currentuser) {
      console.log("currentuser", currentuser)
      fetch(API+`/${currentuser.id}/locate`, {
        method: 'PATCH',
        body: JSON.stringify({latitude, longitude, timestamp}),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(res => res.json())
      .then(data => console.log("post-fetch data", data))
    }
  }

  loginUser = (user) => {
    console.log("user in login user", user)
    this.setState({ currentuser: user })
  }

  render() {
    return (
      <div>
        <LocationRequester getLocationData={this.getLocationData} />
        <br />
        <UserSignup />
        <br />
        <Login loginUser={this.loginUser} />
        <br />
        <StartGame />
      </div>
    )
  }
}
