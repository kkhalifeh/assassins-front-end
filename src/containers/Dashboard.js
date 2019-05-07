import React, { Component } from 'react'
import Target from '../components/Target';

class Dashboard extends Component {

  state = {
    target: null
  }

  componentDidMount() {
    const target = this.props.currentuser.target
    this.setState({ target: target })
  }

  updateTarget = (newTarget) => {
    const target = newTarget.target
    console.log("New Target:", newTarget.target);
    this.setState({ target: target })
  }

  render() {
    const { target } = this.state
    console.log(target)
    return (
      <div className="card mb-3">
        {target ? <Target target={target} currentuser={this.props.currentuser} updateTarget={this.updateTarget} /> : "Your target hasn't logged in yet."}
      </div>
    )
  }
}

export default Dashboard
