import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {

  state = {
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 20
  }

  componentDidMount() {
    this.setState({
      center: {
        lat: this.props.lat,
        lng: this.props.long
      }
    })
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDKFuNQt2_3uU5gvoGs-CdH1D3r_g51CLk" }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <AnyReactComponent
            lat={this.props.lat}
            lng={this.props.long}
            text="X"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
