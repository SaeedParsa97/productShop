import { IoBagOutline } from "react-icons/io5";
import "./Navbar.css";
import { useContext } from "react";
import productsContext from "../../Contexts/Productscontext";
const Navbar = () => {
  const contextData = useContext(productsContext);

  return (
    <nav className="navbar navbar-expand-sm py-3 d-flex">
      <div className="container">
        <a href="#" className="navbar-Brand">
          SabzLearn shop
        </a>
        <ul className="navbar-nav me-auto ms-3">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
        </ul>
        <div className="bag-box">
          <a
            href="#"
            className="bag"
            onClick={() => contextData.setIsShowCart(true)}
          >
            <IoBagOutline className="text-white mt-1" />
            <span className="bag-product-counter">0</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
