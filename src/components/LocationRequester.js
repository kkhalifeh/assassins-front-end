import React, { Component } from 'react'
const API = 'http://localhost:3000/users/login/'

class LocationRequester extends Component {

  componentDidMount(){
    navigator.geolocation.watchPosition(this.geo_success, this.geo_error, this.geo_options);
  }
  geo_success = (position) => {
    this.props.getLocationData(position)
  }

  geo_error = () => {
    alert("Sorry, no position available.");
  }

    geo_options = {
      enableHighAccuracy: true,
      maximumAge        : 30000,
      timeout           : 27000
    };

    render(){
      return null
    }
}

export default LocationRequester
