import React, { Component } from 'react'
import Target from '../components/Target';
import GameStats from './GameStats';

class Dashboard extends Component {

  state = {
    target: null
  }

  componentDidMount() {
    const target = this.props.currentuser.target
    this.setState({ target: target })
  }

  updateTarget = (newTarget) => {
    const target = newTarget.target
    this.setState({ target: target })
  }

  render() {
    const { target } = this.state
    return (
      <div className="card mb-3">
        {target ? <Target target={target} currentuser={this.props.currentuser} updateTarget={this.updateTarget} /> : null}
        {this.props.currentuser.game_id && !target ? <GameStats currentuser={this.props.currentuser} leaveGame={this.props.leaveGame} /> : console.log('not working')}
      </div>
    )
  }
}

export default Dashboard
