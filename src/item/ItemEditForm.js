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
    // event.preventDefault();
    props.editItem(item);
  }

  return (
    <div className= {props.button === 1 ? "hidden" : ""}>
        <div className="createItem-card">
        <h1>Edit Item</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label className="createItemLabel">Name</label>
                <br></br>
                <input className="createItemInput" type="text" name="title" onChange={handleChange} value={item.title}></input>
            </div>

            <div>
                <label className="createItemLabel">Description</label>
                <input className="createItemInput" type="text" name="des" value={item.des} onChange={handleChange}></input>
            </div>

            <div>
                <label className="createItemLabel">Price</label>
                <input className="createItemInput" type="number" name="price" value={item.price} onChange={handleChange}></input>
            </div>

            <div>
                <label className="createItemLabel">Item Category</label>
                <select className="createItemInput" name="category" value={item.category}>
                    <option>-----</option>
                    <option>GurGoan</option>
                    <option>Eid</option>
                    <option>New Born</option>
                    <option>Wedding</option>
                    <option>Others</option>
                </select>
            </div>

            <div>
                <input onClick={() => props.handleSelect(1)} className="item-btncreate" type="submit" value="Update Item"></input>
            </div>
        </form>
        </div>
    </div>
  )
}
