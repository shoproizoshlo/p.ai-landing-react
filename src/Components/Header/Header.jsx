import Navbar from "./Navbar";
import Logo from "../../assets/Logo.svg";
import "../../styles/Header.css";

const Header = () => {
  return (
    <header>
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
