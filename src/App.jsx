import React from "react";
import Menu from "./components/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewItem from "./components/viewItem/ViewItem";
import AddItem from "./components/addItem/AddItem"
import DeleteItem from "./components/deleteItem/DeleteItem";
import UpdateItem from "./components/updateItem/UpdateItem";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>

        <Routes>
          <Route path="/" element={<ViewItem />} />
          <Route path="/add" element={<AddItem />} />
          <Route path="/update" element={<UpdateItem />} />
          <Route path="/delete" element={<DeleteItem />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
