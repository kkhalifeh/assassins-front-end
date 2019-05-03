import React, { Component } from 'react'
import Target from '../components/Target';

class Dashboard extends Component {

  state = {
    target: null
  }

  componentDidMount() {
    const target = this.props.currentuser.target
    this.setState({ target: target })
    console.log("mounting target in dashboard", target)
  }

  render() {
    const { target } = this.state
    return (
      <div className="card mb-3">
        {target ? <Target target={target} /> : null}
      </div>
    )
  }
}

export default Dashboard
