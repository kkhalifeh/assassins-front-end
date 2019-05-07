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
    this.setState({ target: target })
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
    console.log("in the dashboard", this.props)
    return (
      <div className="card mb-3">
        Your secret code is: {this.props.currentuser.secret_code}<br/>(Only give this away to the person who murders you. If they have it, they can mark you as killed.)
        {target ? <Target target={target} currentuser={this.props.currentuser} updateTarget={this.updateTarget} /> : null}
        {this.props.currentuser.game_id && !target ? <GameStats currentuser={this.props.currentuser} leaveGame={this.props.leaveGame} winner={this.state.winner}/> : console.log('not working')}
      </div>
    )
  }
}

export default Dashboard
