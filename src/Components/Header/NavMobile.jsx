import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

import "../../styles/NavMobile.css";

const NavMobile = ({ openModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div
        className="menu-icon"
        onClick={(icon) => setIsMenuOpen((prevState) => !prevState)}
      >
        <FontAwesomeIcon
          icon={isMenuOpen ? ["fas", "times"] : ["fas", "bars"]}
          size="2x"
          className={`menu-icon${isMenuOpen ? " open" : ""}`}
        />
      </div>
      <div className={`nav-mobile${isMenuOpen ? " open" : ""}`}>
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
    </>
  );
};

export default NavMobile;
