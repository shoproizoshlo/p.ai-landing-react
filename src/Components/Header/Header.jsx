import { useState } from "react";
import Navbar from "./Navbar";
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
      {window.innerWidth < 767 ? (
        <div onClick={(icon) => setIsMenuOpen((prevState) => !prevState)}>
          {isMenuOpen ? (
            <div>
              <FontAwesomeIcon icon="fa-solid fa-xmark" size="xl" />
              <div>
                <img src={Logo} alt="Logo" />
              </div>
              <Navbar />
            </div>
          ) : (
            <FontAwesomeIcon icon="fa-solid fa-bars" size="xl" />
          )}
        </div>
      ) : (
        <div>
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          <Navbar />
        </div>
      )}
    </header>
  );
};

export default Header;
