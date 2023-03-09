import "./MobileNav.scss";
import close from "../../assets/close.svg";
import home from "../../assets/home.svg";
import orders from "../../assets/orders.svg";
import additem from "../../assets/additem.svg";
import basket from "../../assets/basket.svg";
import menu from "../../assets/menu.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="m-nav"
        onClick={() => {
          setIsOpen(!isOpen);
          // document.body.classList.add("no-scroll");
        }}
      >
        <img className="m-nav__menu-icon" src={menu} />
      </div>

      <div
        className="m-nav__open"
        style={{ display: isOpen ? "flex" : "none" }}
      >
        <img
          src={close}
          className="m-nav__close-icon"
          onClick={() => {
            setIsOpen(!isOpen);
            // document.body.classList.remove("no-scroll");
          }}
        />

        <div className="m-nav__container">
          <NavLink className="m-nav__link" to="/">
            <div className="m-nav__link-block">
              <img className="m-nav__link-img" src={home} />
              Home
            </div>
          </NavLink>
          <NavLink className="m-nav__link" to="/orders">
            <div className="m-nav__link-block">
              <img className="m-nav__link-img" src={orders} />
              Orders
            </div>
          </NavLink>
          <NavLink className="m-nav__link" to="/addorder">
            <div className="m-nav__link-block">
              <img className="m-nav__link-img" src={basket} />
              New Order
            </div>
          </NavLink>
          <NavLink className="m-nav__link" to="/additem">
            <div className="m-nav__link-block">
              <img className="m-nav__link-img" src={additem} />
              Add Item
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default MobileNav;
