import { Link } from "react-router-dom";

import "../../styles/NavDesktop.css";

const NavDesktop = ({ openModal }) => {
  return (
    <div className="w-full hidden lg:flex flex-row justify-center nav-desktop">
      <ul className="w-2/5 flex flex-row justify-between">
        <li onClick={openModal}>
          <Link to="/">Product</Link>
        </li>
        <li onClick={openModal}>
          <Link to="/">Customers</Link>
        </li>
        <li onClick={openModal}>
          <Link to="/">About</Link>
        </li>
        <li onClick={openModal}>
          <Link to="/">Blog</Link>
        </li>
        <li onClick={openModal}>
          <Link to="/">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavDesktop;
