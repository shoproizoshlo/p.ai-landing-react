import "../../styles/NavDesktop.css";

const NavDesktop = ({ openModal, closeModal }) => {
  return (
    <div className="w-full hidden lg:flex flex-row justify-center nav-desktop">
      <ul className="w-2/5 flex flex-row justify-between">
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

export default NavDesktop;
