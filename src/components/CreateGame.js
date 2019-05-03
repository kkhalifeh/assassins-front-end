import React, { Component } from 'react'
const API = 'http://localhost:3000/games/create/'

class CreateGame extends Component {

  state = {
    name: '',
    description: ''
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
    const { name, description } = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter game name"
              value={name}
              onChange={this.onChange} />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="name">Description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="Enter game description"
              value={description}
              onChange={this.onChange} />
          </div>
          <input
            type="submit"
            value="Create Game"
            className="btn btn-dark btn-block" />
        </div>
      </form>
    )
  }
}

export default CreateGame
