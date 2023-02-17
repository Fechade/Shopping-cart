import React from "react";
import Nav from "./Components/NavBar";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import {Cart} from "./Components/Cart";
import CheckOut from "./Components/CheckOut";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/item" element={<CheckOut/>} />
      </Routes>
    </BrowserRouter>
  );
}
