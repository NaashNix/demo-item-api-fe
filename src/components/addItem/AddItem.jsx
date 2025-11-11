import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from './AddItem.module.css';
import Header from "../utils/Header";

function AddItem() {

  const [itemName, setItemName] = useState();
  const [unitPrice, setUnitPrice] = useState();
  const [currentStock, setCurrentStock] = useState();

  const handleSubmission = () => {
    const itemObj = {
      "itemName": itemName,
      "unitPrice": unitPrice,
      "currentStock": currentStock
    };

    fetchData(itemObj);

  };

  const fetchData = async (itemObj) => {
    try {
      const res = await fetch("http://localhost:8080/item/save", {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(itemObj),
      });

      if(res.ok){
        alert("Item Saved Successfully!");
      }else{
        alert("Error occurred.")
      }

    } catch (error) {
      console.log(error);
    }

    

  }

  return (
    <div className={styles.masterContainer}>

      <Header title={"ADD ITEM TO SYSTEM"} />

      <div className={styles.formContainer} >
        <Form>
          <Form.Group className="mb-3" controlId="id_itemName">
            <Form.Label>Item Name</Form.Label>
            <Form.Control onChange={(event) => { setItemName(event.target.value); }} type="text" placeholder="Enter item name" />
            <Form.Text className="text-muted">
              (Max characters : 40)
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="id_unitPrice">
            <Form.Label>Unit Price</Form.Label>
            <Form.Control onChange={(e) => { setUnitPrice(e.target.value); }} type="text" placeholder="Enter price of the item" />
          </Form.Group>


          <Form.Group className="mb-3" controlId="id_currentStock">
            <Form.Label>Current Stock</Form.Label>
            <Form.Control onChange={(e) => { setCurrentStock(e.target.value); }} type="text" placeholder="Enter the current stock" />
          </Form.Group>

          <Button variant="primary" type="button" onClick={handleSubmission}>
            Save
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default AddItem;
