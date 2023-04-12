import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "../App.css";

export default function ItemCreateForm(props) {
  const [newItem, setNewItem] = useState({});

  const handleChange = (event) => {
    const attributeToChange = event.target.name;
    const newValue = event.target.value;

    const item = { ...newItem };
    item[attributeToChange] = newValue;
    console.log(item);
    setNewItem(item);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addItem(newItem);
  };

  return (
    <div>
      <h1>Create Item</h1>
      <Container className="form">
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control name="title" onChange={handleChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control name="des" onChange={handleChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control name="price" onChange={handleChange} />
        </Form.Group>
      </Container>

      <div className="drop">
        <label>Item Category</label>
        <br></br>
        <select class="selectpicker" onChange={handleChange}>
          <option>GurGoan</option>
          <option>Eid</option>
          <option>New Born</option>
          <option>Wedding</option>
          <option>Others</option>
        </select>
      </div>

      <div className="drop">
        <input type="submit" value="Add Item"></input>
      </div>
    </div>
  );
}
