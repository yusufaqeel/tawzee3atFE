import React, {useState} from 'react'

export default function ItemEditForm(props) {

    const [item, setItem] = useState(props.item)


  const handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value

    const updatedItem = {...item}
    updatedItem[attributeToChange] = newValue
    console.log(updatedItem)
    setItem(updatedItem)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.editItem(item);
  }

  return (
    <div>
        <h1>Edit Item</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="title" onChange={handleChange} value={item.title}></input>
            </div>

            <div>
                <label>Description</label>
                <input type="text" name="des" value={item.des} onChange={handleChange}></input>
            </div>

            <div>
                <label>Price</label>
                <input type="text" name="price" value={item.orice} onChange={handleChange}></input>
            </div>

            <div>
                <label>Item Category</label>
                <select name="category">
                    <option>-----</option>
                    <option>GurGoan</option>
                    <option>Eid</option>
                    <option>New Born</option>
                    <option>Wedding</option>
                    <option>Others</option>
                </select>
            </div>

            <div>
                <input type="submit" value="Update Item"></input>
            </div>
        </form>
    </div>
  )
}
