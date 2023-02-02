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
          </div>
          <div className="navbar__icon">
            <img className="navbar__icon-img" src={orders} />
          </div>
          <div className="navbar__icon">
            <img className="navbar__icon-img" src={additem} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
