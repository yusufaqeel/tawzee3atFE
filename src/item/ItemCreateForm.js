
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "../App.css";
import { useTranslation } from "react-i18next";
import "../i18n";
import UploadImage from '../upload/UploadImage'

export default function ItemCreateForm(props) {
    const [t, i18n] = useTranslation();
    const [newItem, setNewItem] = useState({})
    const [file, setFile] = useState([])
    const [fileSelected, setFileSelected] = useState("")
    const [loading, setLoading] = useState(false)


  const handleChange = (event) => {
    const attributeToChange = event.target.name;
    const newValue = event.target.value;

    const item = { ...newItem };
    item[attributeToChange] = newValue;
    console.log(item);
    setNewItem(item);
  };

  const handleSelectFile = (e) => {
    file.length = 0
    setFileSelected("")
    if (e.target.files.length === 1) {
      file.push(e.target.files[0])
      setFile(file)
      // setFileSelected("1")
      setFileSelected(<center>{file[0].name}</center>)
    }
    else {
      for (let i = 0; i < e.target.files.length; i++) {
        file.push(e.target.files[i])
        setFile(file)
        setFileSelected(<center>Multiple Files Selected</center>)
      }
    }
  }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     props.addItem(newItem, file);
//   }

  const handleSubmit = async (e) => {
    //   e.preventDefault();
      props.addItem(newItem, file);
    //   setLoading(true);
    }

  return (

    <div className={props.button === 1 ? "hidden" : ""}>
        <h1>Create Item</h1>
        <form onSubmit={handleSubmit}>

        <label htmlFor="file">
          {" "}
          Item Image: &nbsp; 
        </label>

        {fileSelected}

        <input
          id="file"
          type="file"
          onChange={handleSelectFile}
          multiple={true}
        />

            <div>
                <label>Name: &nbsp;</label>
                <input type="text" name="title" onChange={handleChange}></input>
            </div>

            <div>
                <label>Description: &nbsp;</label>
                <input type="text" name="des" onChange={handleChange}></input>
            </div>

            <div>
                <label>Price: &nbsp;</label>
                <input type="text" name="price" onChange={handleChange}></input>
            </div>

            <div>
                <label>Item Category: &nbsp;</label>
                <select name="category" onChange={handleChange}>
                    <option>-------</option>
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
  );
}
