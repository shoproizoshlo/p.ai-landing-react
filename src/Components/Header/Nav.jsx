import "../../styles/Nav.css";

const Nav = ({ openModal, closeModal }) => {
  return (
    <div className="nav">
      <ul>
        <li onClick={openModal}>
          <a href="#">Product</a>
        </li>
        <li onClick={openModal}>
          <a href="#">Customers</a>
        </li>
        <li onClick={openModal}>
          <a href="#">About</a>
        </li>
        <li onClick={openModal}>
          <a href="#">Blog</a>
        </li>
        <li onClick={openModal}>
          <a href="#">Login</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
