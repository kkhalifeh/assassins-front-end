import React, { Component } from 'react'

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



  render() {
    const { name, alias, game, password_digest } = this.state
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        this.props.onUserCreate(this.state)}}>
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
