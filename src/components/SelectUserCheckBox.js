import React from 'react'


const SelectUserCheckBox = props => {
  console.log(props.user)
  return (
    <label>
          {props.user.name}
          <input
            name={props.user.name}
            type="checkbox"
            checked={props.checked}
            onChange={() => props.onChecked(props.user.id)} />
    </label>
  )
}

export default SelectUserCheckBox
