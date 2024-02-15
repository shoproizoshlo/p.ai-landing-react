import "../../styles/Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <a href="/">Product</a>
        </li>
        <li>
          <a href="/">Customers</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
