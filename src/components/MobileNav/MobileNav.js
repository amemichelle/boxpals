import "./MobileNav.scss";

function MobileNav() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="m-nav"
        onClick={() => {
          setIsOpen(!isOpen);
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
          }}
        />

        <div className="m-nav__container">
          <NavLink className="m-nav__link" to="/">
            <div
              className="m-nav__link-block"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <img className="m-nav__link-img" src={home} />
              Home
            </div>
          </NavLink>
          <NavLink className="m-nav__link" to="/orders">
            <div
              className="m-nav__link-block"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <img className="m-nav__link-img" src={orders} />
              Orders
            </div>
          </NavLink>
          <NavLink className="m-nav__link" to="/addorder">
            <div
              className="m-nav__link-block"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <img className="m-nav__link-img" src={basket} />
              New Order
            </div>
          </NavLink>
          <NavLink className="m-nav__link" to="/additem">
            <div
              className="m-nav__link-block"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
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
