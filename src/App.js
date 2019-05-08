import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarContainer from './containers/NavbarContainer';
import UserSignup from './components/UserSignup';
import StartGame from './components/StartGame';
import Login from './components/Login';
import LocationRequester from './components/LocationRequester';
import Dashboard from './containers/Dashboard';
import NotYetInGameDashboard from './containers/NotYetInGameDashboard';
import CreateGame from './components/CreateGame';
import HowToPlay from './containers/HowToPlay';


const API = "https://murder-with-friends.herokuapp.com/users"

export default class App extends Component {

  state = {
    latitude: null,
    longitude: null,
    timestamp: null,
    currentuser: null
  }

  componentDidMount() {
    const userId = localStorage.getItem("user_id")

    if (userId) {
      fetch(API + '/auto_login', {
        headers: {
          "Authorization": userId
        }
      })
        .then(res => res.json())
        .then((data) => {
          if (data.id)
          {this.setState({ currentuser: data })}
          else {
            console.log("unable to automatically login")
          }
        })
    } else {
      console.log('Fail');
    }
  }

  getLocationData = (position) => {
    if (position.coords) {
      if (this.state.currentuser) {
        fetch(API + `/${this.state.currentuser.id}/locate`, {
          method: 'PATCH',
          body: JSON.stringify({ latitude: position.coords.latitude, longitude: position.coords.longitude, timestamp: position.timestamp }),
          headers: {
            'Content-Type': 'application/json',
          }
        })
          .then(res => res.json())
          .then(data => localStorage.getItem("user_id") && this.setState({currentuser: data}))
      }
    }
  }

  processNewUser = (user) => {
    this.setState({ currentuser: user })
    this.props.history.push('/')
  }

  componentDidUpdate() {
    const { longitude, latitude, currentuser, timestamp } = this.state

  }

  loginUser = (user) => {
    this.setState({ currentuser: user }, () => {
      localStorage.setItem("user_id", this.state.currentuser.id)
      return < Redirect to="/" />
    })
  }

  onUserCreate = (inputs) => {
    const user = { ...inputs }
    if (user.name !== '' && user.alias !== '' && user.password_digest !== '') {
      fetch(API + "/create/", {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(user), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
        .then(response => {
          this.loginUser(response)
          return this.props.history.push("/")
        })
    }
    else { alert("refused to submit due to user failure") }
  }
  updateCurrentuser = (res) => {

  }
  leaveGame = (e, id) => {
    e.preventDefault()
    const user = { id: id }
    fetch(API + `/${id}/leave_game`, {
      method: 'PATCH',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(user => this.setState({ currentuser: user }))
  }

  logOut = (e) => {
    e.preventDefault()
    localStorage.removeItem("user_id")
    this.setState({
      currentuser: null
    }, () => {
      this.props.history.push("/")
    })
  }


  render() {
    return (

      <div>
        <NavbarContainer logOut={this.logOut} currentuser={this.state.currentuser} />
        <LocationRequester getLocationData={this.getLocationData} />

        <Switch>

          <Route path='/new-user' render={(routeProps) => <UserSignup {...routeProps} onUserCreate={this.onUserCreate} />} />
          <Route path='/create-game' render={(routeProps) => <CreateGame {...routeProps} currentuser={this.state.currentuser} loginUser={this.loginUser} />} />
          <Route path='/start-game' component={StartGame} />
          <Route path='/how-to-play' render={(routeProps) => <HowToPlay {...routeProps} />} />
          <Route exact path='/' render={
            (routeProps) => {
              switch (true) {
                case !!(this.state.currentuser && (this.state.currentuser.game && this.state.currentuser.game.started)):
                  return <Dashboard {...routeProps} currentuser={this.state.currentuser} leaveGame={this.leaveGame} />
                  // break;
                case !!this.state.currentuser:
                  return <NotYetInGameDashboard {...routeProps} currentuser={this.state.currentuser} />
                  // break;
                default:
                  return <Login {...routeProps} loginUser={this.loginUser} />
              }
            }
          } />
        </Switch>
      </div>
    )
  }
}
