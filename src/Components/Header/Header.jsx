import { useState } from "react";
import Nav from "./Nav";
import Logo from "../../assets/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

import "../../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      {window.innerWidth < 1023 ? (
        <div onClick={(icon) => setIsMenuOpen((prevState) => !prevState)}>
          {isMenuOpen ? (
            <div>
              <FontAwesomeIcon icon="fa-solid fa-xmark" size="2xl" />
              <Nav />
            </div>
          ) : (
            <FontAwesomeIcon icon="fa-solid fa-bars" size="2xl" />
          )}
        </div>
      ) : (
        <Nav />
      )}
    </header>
  );
};

export default Header;
