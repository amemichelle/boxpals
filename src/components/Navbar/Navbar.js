import "./Navbar.scss";
import home from "../../assets/home.svg";
import orders from "../../assets/orders.svg";
import additem from "../../assets/additem.svg";
import basket from "../../assets/basket.svg";
import logout from "../../assets/logout.svg";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <section className="navbar">
        <div className="navbar__container">
          <div className="navbar__icon">
            <NavLink to="/">
              <img className="navbar__icon-img" src={home} />
            </NavLink>
            <p className="navbar__icon-label">Home</p>
          </div>
          <div className="navbar__icon">
            <NavLink to="/orders">
              <img className="navbar__icon-img" src={orders} />
            </NavLink>
            <p className="navbar__icon-label">Orders</p>
          </div>
          <div className="navbar__icon">
            <NavLink to="/addorder">
              <img className="navbar__icon-img" src={basket} />
            </NavLink>
            <p className="navbar__icon-label">New Order</p>
          </div>

          <div className="navbar__icon">
            <NavLink to="/additem">
              <img className="navbar__icon-img" src={additem} />
            </NavLink>
            <p className="navbar__icon-label">Add Item</p>
          </div>

          <div className="navbar__icon">
            <NavLink to="/login">
              <img className="navbar__icon-img" src={logout} />
            </NavLink>
            <p className="navbar__icon-label">Log out</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
