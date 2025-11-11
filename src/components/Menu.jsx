import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import styles from './Menu.module.css'

function Menu() {
  return (
    <Nav className={styles.menuFeatures} fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link as={Link} to="/" eventKey="link-0" >View Items</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/add" eventKey="link-1">Add Items</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/update" eventKey="link-2">Update Items</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/delete" eventKey="disabled">Delete Items</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Menu;
