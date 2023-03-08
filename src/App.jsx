import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Header from "./components/cart/Header";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
import Cart from "./components/cart/Cart";
// import DataFetching from "./components/DataFetching";
// import DataFetch from "./components/DataFetch";
import PostDetails from "./components/postdetails/PostDetails";
import Test from "./components/test";
import Posts from "./components/postdetails/posts";
import Header from "./components/header/Header";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/" element={<DataFetching />} /> */}
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/posts" element={<Posts />} />
          {/* <Route path="/post" element={<DataFetching />} /> */}
        </Routes>
        {/* <Link to="/">Home</Link> */}

        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
