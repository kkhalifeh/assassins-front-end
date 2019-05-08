import React, { Component } from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class NavbarContainer extends Component {

  onClick = (e) => {
    e.preventDefault()
  }

  render() {
    const user = this.props.currentuser
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Murder With Friends</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {user ? <Nav.Link href="#home" onClick={this.props.logOut}>Logout</Nav.Link> : null}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default NavbarContainer
