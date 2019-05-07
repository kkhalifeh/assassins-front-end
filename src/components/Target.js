import React, { Component } from 'react'
import GoogleMap from './GoogleMap';
const API = "http://localhost:3000/users"

class Target extends Component {

  killTarget(userId, targetId) {
    const user = { id: userId, target_id: targetId, gameId: this.props.currentuser.game_id }
    fetch(API + `/${userId}/kill_target`, {
      method: 'PATCH',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log('DATA!!!!', data);
        if (data.target.target_id !== data.id) {
          this.props.updateTarget(data)
        } else {
          // debugger
          this.props.endGame()
        }
      })
  }

  killButton = (e, id) => {
    e.preventDefault()

    const userLat = this.props.currentuser.latitude
    const userLong = this.props.currentuser.longitude

    const targetLat = this.props.target.latitude
    const targetLong = this.props.target.longitude

    if (this.calculateDistance(userLat, userLong, targetLat, targetLong) < 0.5) {
      this.killTarget(this.props.currentuser.id, id)
    } else {
      console.log("Target is too far to kill");
    }
  }

  calculateDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var dLat = this.toRad(lat2 - lat1);
    var dLon = this.toRad(lon2 - lon1);
    var lat1 = this.toRad(lat1);
    var lat2 = this.toRad(lat2);

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
  }

  // Converts numeric degrees to radians
  toRad(Value) {
    return Value * Math.PI / 180;
  }

  render() {
    return (
      <div className="card-body">
        <h5 className="card-title">Your target is: {this.props.target.name}</h5>
        <GoogleMap long={this.props.target.longitude} lat={this.props.target.latitude} />
        <br />
        <button
          className="btn btn-danger btn-lg btn-block"
          onClick={(e) => this.killButton(e, this.props.target.target_id)}>Kill Target</button>
      </div>
    )
  }
}

export default Target
