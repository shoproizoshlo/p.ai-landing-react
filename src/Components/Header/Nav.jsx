import "../../styles/Nav.css";

const Nav = ({ openModal, closeModal }) => {
  return (
    <div className="nav">
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
    </div>
  );
};

export default Nav;
