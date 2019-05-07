import React, {Component} from 'react'
import SelectUserCheckBox from './SelectUserCheckBox'
const API = 'http://localhost:3000/users/unassigned/'

class SelectNewGameUsers extends Component {
  state = {
    unassignedUsers: [],
    checkedUsers: []
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(res => this.setState({unassignedUsers: res}))
    this.setState({checkedUsers: [parseInt(localStorage.getItem("user_id"))]})
  }

  onChecked = (id) => {
    console.log(this.state.checkedUsers)
    if (!this.state.checkedUsers.includes(id))
    {this.setState
      ({checkedUsers: [...this.state.checkedUsers, id]}, console.log("Checked Users", this.state.checkedUsers)
    )}
    else {this.setState({checkedUsers: this.state.checkedUsers.filter(x => x !== id)})}
  }

  render(){

  const { name, description } = this.props
    if (this.state.unassignedUsers) {
      return (
        <div>
        <h3>Which users would you like to add to your game?</h3>
        <form onSubmit={(e) =>
          {e.preventDefault();
          this.props.submitUsers(this.state.checkedUsers)}
          }>
          {this.state.unassignedUsers.map(user => <SelectUserCheckBox user={user} key={user.id} checked={this.state.checkedUsers.includes(user.id)} onChecked={this.onChecked}/>)}
          <input
            type="submit"
            value="Add Users to Game"
            className="btn btn-dark btn-block" />
        </form>
        </div>
        )
      }
    else
      return (
        "No users outside of current game."
      )
  }
}

export default SelectNewGameUsers
