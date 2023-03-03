import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
import Cart from "./components/Cart";
import DataFetching from "./components/DataFetching";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <DataFetching />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/post" element={<DataFetching />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
