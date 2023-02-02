import "./OrderSidebar.scss";
import backarrow from "../../assets/backarrow.svg";

function OrderSidebar() {
  return (
    <>
      <section className="sidebar">
        <div className="sidebar__top-bar">
          <h2 className="sidebar__heading">Current orders</h2>
          <div className="sidebar__back">
            <img src={backarrow} />
          </div>
        </div>
      </section>
    </>
  );
}

export default OrderSidebar;
