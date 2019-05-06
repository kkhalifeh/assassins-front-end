import React, { Component } from 'react'
const API = "http://localhost:3000/kills"

class GameStats extends Component {

  state = {
    stats: '',
    game_id: ''
  }

  componentDidMount() {
    const game = { game_id: this.props.currentuser.game_id }
    fetch(API + `/${game.id}/stats`, {
      method: 'POST',
      body: JSON.stringify(game),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ stats: data, game_id: this.props.currentuser.game_id }, this.renderStats)
      })
  }

  renderStats = () => {
    const stats = [...this.state.stats]
    stats.forEach(stat => {
      return <h1>{stat.killer_id}</h1>
    });

  }

  render() {
    return (
      <div>
        {this.renderStats()}
        <button className="btn btn-info btn-block" onClick={(e) => this.props.leaveGame(e, this.props.currentuser.id)}>Leave Game</button>
      </div>
    )
  }
}

export default GameStats