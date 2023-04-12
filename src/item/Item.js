import React from 'react'

export default function Item(props) {
  return (
    <>
        <img src={props.imageURL} alt='Item image'></img>
        <p>name: <span>{props.title}</span></p>
        <p>description: <span>{props.des}</span></p>
        <p>category: <span>{props.category}</span></p>
        <p>price: <span>{props.price}</span></p>
        <button onClick={() => {props.editView(props._id)}}>Edit</button>
        <button onClick={() => {props.deleteItem(props._id)}}>Delete</button>
    </>
  )
}
