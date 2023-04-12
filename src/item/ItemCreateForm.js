import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "../App.css";
import { useTranslation } from "react-i18next";
import "../i18n";

export default function ItemCreateForm(props) {
  const [newItem, setNewItem] = useState({});
  const [t, i18n] = useTranslation();

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
    <div className="bigdiv">
      <h1 className="h11">Create Item</h1>
      <Container className="form">
        <Form.Group>
          <Form.Label>{t("Name")}</Form.Label>
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
        <div className="select">
          <Form.Select className="" aria-label="Default select example">
            <option value="GurGoan">GurGoan</option>
            <option value="Eid">Eid</option>
            <option value="NewBorn">New Born</option>
            <option value="Wedding">Wedding</option>
            <option value="Others">Others</option>
          </Form.Select>
        </div>
      </div>
      <div className="drop2">
        <Button className="btn123" variant="grey" type="submit">
          Create
        </Button>
      </div>
    </div>
  );
}
