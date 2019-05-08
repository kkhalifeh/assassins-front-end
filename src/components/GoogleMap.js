import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = (props) => <div><img src={props.picture} alt="Target" height="50" width="50" /></div>;

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
            picture={this.props.picture}
            text="X"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
