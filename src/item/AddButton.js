import React from 'react'

export default function AddButton(props) {
  return (
    <div className= {props.button === 2 ? "hidden" : ""}>
      <div className='item-cardbtn'>
        <button className='add-itemBtn' onClick={() => props.handleSelect(2)}>+</button>
      </div>
    </div>
  )
}
