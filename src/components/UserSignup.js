import React, { Component } from 'react'
const API = 'http://localhost:3000/users/create/'

class UserSignup extends Component {

  state = {
    name: '',
    alias: '',
    password_digest: '',
    id: 11
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    const user = { ...this.state }
    e.preventDefault()
    if (user.name !== '' && user.alias !== '' && user.password_digest !== '') {
      fetch(API, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(user), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
        .then(response => console.log('Success:', response))
    }
    else { console.log("refused to submit due to user failure") }
  }

  render() {
    const { name, alias, game, password_digest } = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter name"
              value={name}
              onChange={this.onChange} />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="name">Alias</label>
            <input
              type="text"
              className="form-control"
              name="alias"
              placeholder="Enter name"
              value={alias}
              onChange={this.onChange} />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password_digest"
              placeholder="password"
              value={password_digest}
              onChange={this.onChange} />
          </div>
          <input
            type="submit"
            value="Sign Up"
            className="btn btn-dark btn-block" />
        </div>
      </form>
    )
  }
}

export default UserSignup
