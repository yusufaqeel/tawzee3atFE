import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import Item from './Item'
import ItemCreateFrom from './ItemCreateForm'
import ItemEditForm from './ItemEditForm'

export default function ItemList() {

  const [items, setItems] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  const [currentItem, setCurrentItem] = useState("")

  useEffect(() => {
    loadItemList()
  }, [])

  const loadItemList = () => {
    Axios.get("item/index")
    .then((res) => {
      console.log(res);
      // State to store the data
      setItems(res.data.items)
    })
    .catch((err) => {
      console.log("error retriving Items");
      console.log(err);
    })
  }

  const addItem = (item) => {
    Axios.post("item/add", item)
    .then (res => {
      console.log(res => {
        console.log("Item was added successfully");
        loadItemList()
      });
    })
    .catch(err => {
      console.log("error adding item");
      console.log(err);
    })
  }

  const editView = (id) => {
    Axios.get(`item/edit?id=${id}`,
    {
      headers: {
        "Authorization": "Bearer" + localStorage.getItem("token")
      }
    })
    .then (res => {
      console.log(res.data.item);
      let item = res.data.item
      console.log('loaded item info');
      setIsEdit(true)
      setCurrentItem(item)
    })
    .catch(err => {
      console.log('Error Loading Infos');

    })
  }

  const editItem = (item) => {
    Axios.put("item/update", item,
    {
      headers: {
        "Authorization": "Bearer" + localStorage.getItem("token")
      }
    })
    .then(res => {
      console.log("Item was updated");
      console.log(res);
      loadItemList()
    })
    .catch(err => {
      console.log("Editing Failed");
      console.log(err);
    })
  }

  const deleteItem = (id) => {
    Axios.delete(`item/delete?id=${id}`,
    {
      headers: {
        "Authorization": "Bearer" + localStorage.getItem("token")
      }
    })
    .then(res => {
      console.log("item was Deleted");
      console.log(res);
      loadItemList()
    })
    .catch(err => {
      console.log("Deleting Failed");
      console.log(err);
    })
  }

  const allItems = items.map((item, index) => (
    <dev key={index}>
      <Item {...item} editItem={editItem} deleteItem={deleteItem}/>
    </dev>
  ))

  return (
    <div>
      <h1>ItemList</h1>
      
      <div>
        {allItems}
      </div>
      {(!isEdit) ?
      <ItemCreateFrom addItem={addItem}/>
      :
      <ItemEditForm key={currentItem._id} item={currentItem} editItem={editItem}/>
      }
    </div>
  )
}
