import React, { Component } from 'react'
const API = 'https://murder-with-friends.herokuapp.com/users/login/'

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

  // this fails if someone enters an invalid password

  onSubmit = (e) => {
    e.preventDefault()
    const user = { ...this.state }
    if (user.alias !== '' && user.password_digest !== '') {

      fetch(API, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(user), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return {error: "User failure"}
        }
      })
        .then(user => {
          if (user.id){
          this.props.loginUser(user)
          this.setState({ alias: '', password_digest: '' })}
          else {alert("That was an incorrect login")}
        })
    }
    else { alert("either username or password blew it") }
  }

  redirectToSignUp = (e) => {
    e.preventDefault()
    this.props.history.push('/new-user')
  }

  redirectToHowToPlay = (e) => {
    e.preventDefault()
    this.props.history.push('/how-to-play')
  }

  render() {
    const { alias, password_digest } = this.state
    return (
      <div>
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
        <br />
        <h5><center>
          OR...</center></h5>
        <br />
        <button onClick={this.redirectToSignUp} className="btn btn-dark btn-block">Sign Up</button>

        <div className="fixed-bottom">
          <button onClick={this.redirectToHowToPlay} className="btn btn-danger btn-block">How to Play</button>
        </div>
      </div>
    )
  }
}

export default Login
