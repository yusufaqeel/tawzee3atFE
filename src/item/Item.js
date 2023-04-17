import React from 'react'

export default function Item(props) {
  return (
      <div className='item-card'>
        <img src={props.imageUrl} alt='Item image' className='itemImage'></img>
          <div className='item-cardDetail'>
            <p>name: <span>{props.title}</span></p>
            <p>description: <span>{props.des}</span></p>
            <p>category: <span>{props.category}</span></p>
            <p>price: <span>{props.price}</span></p>
          </div>
          <div className='item-btnContainer'>
            <button className='item-btnDetails' onClick={() => {props.editView(props._id); props.handleSelect(2)}}>Edit</button>
            <button className='item-btnDetails' onClick={() => {props.deleteItem(props._id)}}>Delete</button>
          </div>
      </div>
  )
}
