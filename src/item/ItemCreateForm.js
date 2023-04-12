import React, {useState} from 'react'

export default function ItemCreateForm(props) {

    const [newItem, setNewItem] = useState({})


  const handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value

    const item = {...newItem}
    item[attributeToChange] = newValue
    console.log(item)
    setNewItem(item)
  }

  const handleSubmit = (event) => {
    // event.preventDefault();
    props.addItem(newItem);
  }

  return (
    <div>
        <h1>Create Item</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="title" onChange={handleChange}></input>
            </div>

            <div>
                <label>Description</label>
                <input type="text" name="des" onChange={handleChange}></input>
            </div>

            <div>
                <label>Price</label>
                <input type="text" name="price" onChange={handleChange}></input>
            </div>

            <div>
                <label>Item Category</label>
                <select name="category" onChange={handleChange}>
                    <option>GurGoan</option>
                    <option>Eid</option>
                    <option>New Born</option>
                    <option>Wedding</option>
                    <option>Others</option>
                </select>
            </div>

            <div>
                <input type="submit" value="Add Item"></input>
            </div>
        </form>
    </div>
  )
}
