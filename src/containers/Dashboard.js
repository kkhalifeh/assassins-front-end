import React, { Component } from 'react'
import Target from '../components/Target';
import GameStats from './GameStats';

class Dashboard extends Component {

  state = {
    target: null,
    winner: null
  }

  componentDidMount() {
    const target = this.props.currentuser.target
    if (target.target_id === this.props.currentuser.id) {
      this.endGame()
    }
    else { this.setState({ target: target }) }
  }

  updateTarget = (newTarget) => {
    const target = newTarget.target
    this.setState({ target: target })
  }

  endGame = () => {
    this.setState({ target: null, winner: this.props.currentuser })
  }

  render() {
    const { target } = this.state
    return (
      <div className="card mb-3">
        <h3>Hello {this.props.currentuser.name} (a.k.a. {this.props.currentuser.alias}):</h3>

        <h5>You have killed {this.props.currentuser.kill_count} friends this game, and {this.props.currentuser.all_time_kill_count} friends overall.</h5>

        <h5>Your secret code is: {this.props.currentuser.secret_code}</h5>
        <p>(Only give your secret code away to the person who murders you. If they have it, they can mark you as killed.)</p>
        {target ? <Target target={target} currentuser={this.props.currentuser} endGame={this.endGame} updateTarget={this.updateTarget} /> : null}
        {this.props.currentuser.game_id && !target ? <GameStats currentuser={this.props.currentuser} leaveGame={this.props.leaveGame} winner={this.state.winner} /> : null}
      </div>
    )
  }
}

export default Dashboard
