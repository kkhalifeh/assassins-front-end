import React, { Component } from 'react'

class LocationRequester extends Component {

  componentDidMount(){
    navigator.geolocation.watchPosition(this.geo_success, this.geo_error, this.geo_options);
  }
  geo_success = (position) => {
    console.log(position)
    this.props.getLocationData(position)
  }

  geo_error = () => {
    console.log("not seeing anything")
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
