import React, { Component } from 'react'
const API = 'https://murder-with-friends.herokuapp.com/games/start/'

class StartGame extends Component {

  onSubmit = (e) => {
    const game = { id: 1 }
    e.preventDefault()
    fetch(API, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(game), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-row">
          <input
            type="submit"
            value="Start Game"
            className="btn btn-dark btn-block" />
        </div>
      </form>
    )
  }
}

export default StartGame
