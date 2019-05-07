import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class NotYetInGameDashboard extends Component {

  render() {
    return (
      <div>
        <h3>You haven't been assigned a game yet. Please wait for a moderator to assign you to a game.</h3>
        <button className="btn btn-outline-primary btn-block"><Link to='/create-game'>Become a moderator and create your own game.</Link></button>
      </div>
    )
  }
}

export default NotYetInGameDashboard
