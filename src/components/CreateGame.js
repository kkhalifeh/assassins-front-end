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

  // This creates the game and sets created to true so that the component knows to render the select users feature rather than the game feature
  onSubmit = (e) => {
    const game = { ...this.state }
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

  // This callback function sends a list of user_ids to the server to make them correspond to the created game
  submitUsers = (user_ids) => {
    fetch(API+"games/add_users/", {
      method: 'POST',
      body: JSON.stringify({id: this.state.game.id, users: user_ids}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => console.log("This is where we redirect to a game dashboard", res))
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
