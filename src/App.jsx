import React from "react";
import Menu from "./components/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewItem from "./components/viewItem/ViewItem";
import AddItem from "./components/addItem/AddItem";
import DeleteItem from "./components/deleteItem/DeleteItem";
import UpdateItem from "./components/updateItem/UpdateItem";
import { PrimeReactProvider } from 'primereact/api';
// import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <PrimeReactProvider>
          <Menu></Menu>

          <Routes>
            <Route path="/" element={<ViewItem />} />
            <Route path="/add" element={<AddItem />} />
            <Route path="/update" element={<UpdateItem />} />
            <Route path="/delete" element={<DeleteItem />} />
          </Routes>
          </PrimeReactProvider>
          </BrowserRouter>

        </>
        );
}

        export default App;
