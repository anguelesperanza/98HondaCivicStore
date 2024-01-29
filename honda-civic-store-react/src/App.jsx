// This is the main application that React Runs

import NavigationBar from "./NavigationBar";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Product from "./Product";
import Accessories from "./Accessories";
import Gallery from "./Gallery";
import Cart from "./Cart";
import Home from "./Home";

import "./App.css";

// React will call App
function App() {
  return (
    <div>
      <h1>1998 Honda Civic Store</h1>
      {/* This creates a navigation bar coponent that takes routes */}
      <NavigationBar />

      {/* This creates a routes component that takes individual routs */}
      <Routes>
        {/* Routs to the home page */}
        <Route path="/" element={<Navigate to="/home" />} />
        {/* Routs to the home page */}
        <Route path="/home" element={<Home />} />

        {/* Routs to products page */}
        <Route path="/product" element={<Product />} />

        {/* Routs to accessories  page */}
        <Route path="/accessories" element={<Accessories />} />

        {/* Routs to gallery page */}
        <Route path="/gallery" element={<Gallery />} />

        {/* Routs to carts page */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
