import React from 'react'

const CreateGameForm = props => {
  const { name, description } = props
  return (
    <form onSubmit={props.onSubmit}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Enter game name"
            value={name}
            onChange={props.onChange} />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="name">Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            placeholder="Enter game description"
            value={description}
            onChange={props.onChange} />
        </div>
        <input
          type="submit"
          value="Create Game"
          className="btn btn-dark btn-block" />
      </div>
    </form>
  )
}

export default CreateGameForm
