import { useState } from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import Logo from "../../assets/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

import "../../styles/Header.css";

const Header = ({ openModal, closeModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div>
        <img src={Logo} alt="Logo" />
      </div>

      <NavMobile openModal={openModal} closeModal={closeModal} />
      <NavDesktop openModal={openModal} closeModal={closeModal} />
      {/* {window.innerWidth < 1022 ? (
        <div
          className="menu-icon"
          onClick={(icon) => setIsMenuOpen((prevState) => !prevState)}
        >
          {isMenuOpen ? (
            <>
              <FontAwesomeIcon icon="fa-solid fa-xmark" size="2xl" />
              <NavMobile openModal={openModal} closeModal={closeModal} />
            </>
          ) : (
            <FontAwesomeIcon icon="fa-solid fa-bars" size="2xl" />
          )}
        </div>
      ) : (
        <NavDesktop openModal={openModal} closeModal={closeModal} />
      )} */}
    </header>
  );
};

export default Header;
