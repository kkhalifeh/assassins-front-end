import React, { Component } from 'react'
import CreateGameForm from './CreateGameForm'
import SelectNewGameUsers from './SelectNewGameUsers'
const API = 'http://localhost:3000/'

class CreateGame extends Component {

  state = {
    name: '',
    description: '',
    created: false,
    game: {}
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    const game = { ...this.state }
    console.log(game);
    e.preventDefault()
    fetch(API+"games/create/", {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(game), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => this.setState({created: true, game: response}))
  }

  submitUsers = (vals) => {
    fetch(API+"games/add_users/", {
      method: 'POST',
      body: JSON.stringify({id: this.state.game.id, users: vals}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => console.log("if this shit all works this will console log the users", res))
  }

  // This renders the create a game form, or, upon creation, renders a form to select users to add to the game.
  render() {
    if (this.state.created === false) {
      return <CreateGameForm onChange={this.onChange} onSubmit={this.onSubmit}/>
    }
    else {
      return <SelectNewGameUsers
        game={this.state.game}
        name={this.state.name}
        description={this.state.description}
        submitUsers={this.submitUsers}/>
    }
  }
}

export default CreateGame
