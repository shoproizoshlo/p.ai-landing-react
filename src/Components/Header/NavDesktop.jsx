import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "../../styles/NavDesktop.css";

const NavDesktop = ({ openModal }) => {
  return (
    <div className="w-full hidden lg:flex flex-row justify-center nav-desktop">
      <ul className="w-2/5 flex flex-row justify-between">
        <li onClick={openModal}>
          <Link to="/product">Product</Link>
        </li>
        <li onClick={openModal}>
          <Link to="/customers">Customers</Link>
        </li>
        <li onClick={openModal}>
          <Link to="/about">About</Link>
        </li>
        <li onClick={openModal}>
          <Link to="/blog">Blog</Link>
        </li>
        <li onClick={openModal}>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavDesktop;
