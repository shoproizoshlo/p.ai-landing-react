import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

import "../../styles/NavMobile.css";

const NavMobile = ({ openModal, isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className="flex lg:hidden">
      <div
        className="flex flex-col items-end z-10 cursor-pointer menu-icon"
        onClick={(icon) => setIsMenuOpen((prevState) => !prevState)}
      >
        <FontAwesomeIcon
          icon={isMenuOpen ? ["fas", "times"] : ["fas", "bars"]}
          size="2x"
          className={`${isMenuOpen ? " open" : ""}`}
        />
      </div>
      <div
        className={`pt-24 pb-24 ps-5 pe-5 sm:ps-12 sm:pe-12 hidden fixed inset-0 h-full w-full bg-white z-4 menu-mobile${
          isMenuOpen ? " open" : ""
        }`}
      >
        {isMenuOpen ? (
          <ul className="flex flex-col items-end justify-start text-xl">
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
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default NavMobile;
