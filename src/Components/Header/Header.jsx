import { useState } from "react";
import { useNavigate } from "react-router-dom";

import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import Logo from "../../assets/Logo.svg";

const Header = ({ openModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="mb-0 mt-0 ms-auto me-auto pt-5 pb-5 ps-4 pe-4 sm:p-12 lg:pt-10 lg:pb-10 lg:ps-4 lg:pe-4 fixed lg:relative flex flex-row items-center justify-between max-w-7xl w-full bg-white z-10">
      <div onClick={() => navigate("/")} className="hover:cursor-pointer">
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
