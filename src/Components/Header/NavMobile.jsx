import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

import "../../styles/NavMobile.css";

const NavMobile = ({ openModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="nav-mobile">
      <div
        className="menu-icon"
        onClick={(icon) => setIsMenuOpen((prevState) => !prevState)}
      >
        {isMenuOpen ? (
          <FontAwesomeIcon icon="fa-solid fa-xmark" size="2xl" />
        ) : (
          <FontAwesomeIcon icon="fa-solid fa-bars" size="2xl" />
        )}
      </div>
      {isMenuOpen ? (
        <ul>
          <li onClick={openModal}>
            <a>Product</a>
          </li>
          <li onClick={openModal}>
            <a>Customers</a>
          </li>
          <li onClick={openModal}>
            <a>About</a>
          </li>
          <li onClick={openModal}>
            <a>Blog</a>
          </li>
          <li onClick={openModal}>
            <a>Login</a>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavMobile;
