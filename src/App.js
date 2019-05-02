import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from './containers/Navbar';
import UserSignup from './components/UserSignup';
import StartGame from './components/StartGame';
import Login from './components/Login';
import LocationRequester from './components/LocationRequester';

export default class App extends Component {

  state = {
    latitude: null,
    longitude: null,
    timestamp: null
  }

  getLocationData = (position) => {
    if (position.coords){
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      timestamp: position.timestamp
    })}
  }

  shouldComponentUpdate(nextProps, nextState){
    return (Math.abs(nextState.latitude - this.state.latitude)+Math.abs(nextState.longitude - this.state.longitude)) >.00000001
  }

  componentDidUpdate(){
    if (this.state.latitude){
      console.log("this is where we should submit a fetch request", this.state)
    }
  }

  render() {
    return (
      <div>
        <LocationRequester getLocationData ={this.getLocationData} />
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
