import React, { Component } from 'react'

class Navbar extends Component {

  onClick = (e) => {
    e.preventDefault()
  }

  render() {
    const user = this.props.currentuser
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="" onClick={this.onClick}>Murder With Friends</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              {user ? <a className="nav-link" href="" onClick={this.props.logOut}>Logout <span className="sr-only">(current)</span></a> : null}
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default Navbar
