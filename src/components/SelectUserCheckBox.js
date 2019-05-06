import React from 'react'


const SelectUserCheckBox = props => {
  return (
    <div id={props.user.id}>
    <label>
          {"\n"}{props.user.name}
          <input
            name={props.user.name}
            type="checkbox"
            checked={props.checked}
            onChange={() => props.onChecked(props.user.id)} />
    </label>
    </div>
  )
}

export default SelectUserCheckBox
