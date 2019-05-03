import React from 'react'
import GoogleMap from './GoogleMap';

const Target = (props) => {
  return (
    <div className="card-body">
      <h5 className="card-title">{props.target.name}</h5>
      <GoogleMap long={props.target.longitude} lat={props.target.latitude} />
    </div>
  )
}

export default Target
