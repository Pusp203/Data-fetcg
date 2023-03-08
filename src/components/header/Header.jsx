import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <nav>
      <h2>logo here</h2>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
          <FiShoppingBag /> <p>0</p>
        </Link>
        <Link to="/posts">posts</Link>
      </div>
    </nav>
  );
};

export default Header;
