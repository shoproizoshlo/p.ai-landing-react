import { useState } from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import Logo from "../../assets/Logo.svg";

import "../../styles/Header.css";

const Header = ({ openModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <NavMobile
        openModal={openModal}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <NavDesktop openModal={openModal} />
    </header>
  );
};

export default Header;
