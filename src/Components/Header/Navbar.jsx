import Nav from "./Nav";
import Logo from "../../assets/Logo.svg";
import "../../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <Nav />
    </div>
  );
};

export default Navbar;
