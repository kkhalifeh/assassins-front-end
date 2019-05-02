import React, { Component } from 'react'
const API = 'http://localhost:3000/users/login/'

class Login extends Component {

  state = {
    alias: '',
    password_digest: ''
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    const user = { ...this.state }
    if (user.alias !== '' && user.password_digest !== '') {
      e.preventDefault()
      fetch(API, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(user), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
    }
  }

  render() {
    const { alias, password_digest } = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-row">
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
              placeholder="Password"
              value={password_digest}
              onChange={this.onChange} />
          </div>
          <input
            type="submit"
            value="Login"
            className="btn btn-dark btn-block" />
        </div>
      </form>
    )
  }
}

export default Login