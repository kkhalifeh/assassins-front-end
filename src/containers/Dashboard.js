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
    console.log(this.props.currentuser)
    const { target } = this.state
    return (
      <div className="card mb-3">
        {target ? <Target target={target} currentuser={this.props.currentuser} updateTarget={this.updateTarget} /> : null}
      </div>
    )
  }
}

export default Dashboard
