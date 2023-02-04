import "./Navbar.scss";
import home from "../../assets/home.svg";
import orders from "../../assets/orders.svg";
import additem from "../../assets/additem.svg";

function Navbar() {
  return (
    <>
      <section className="navbar">
        <div className="navbar__container">
          <div className="navbar__icon">
            <img className="navbar__icon-img" src={home} />
            <p className="navbar__icon-label">Home</p>
          </div>
          <div className="navbar__icon">
            <img className="navbar__icon-img" src={orders} />
            <p className="navbar__icon-label">Orders</p>
          </div>
          <div className="navbar__icon">
            <img className="navbar__icon-img" src={additem} />
            <p className="navbar__icon-label">Add Item</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
