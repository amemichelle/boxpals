import "./OrderSidebar.scss";
import backarrow from "../../assets/backarrow.svg";
import forwardarrow from "../../assets/forwardarrow.svg";
import { useState } from "react";
import OrderCard from "../../components/OrderCard/OrderCard";

function OrderSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <section className={isOpen ? "sidebar open-width" : "sidebar"}>
        <div className="sidebar__top-bar">
          {isOpen && <h2 className="sidebar__heading">Current orders</h2>}
          <div
            className="sidebar__back"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <img src={isOpen ? backarrow : forwardarrow} />
          </div>
        </div>
        {isOpen && <OrderCard></OrderCard>}
      </section>
    </>
  );
}

export default OrderSidebar;
