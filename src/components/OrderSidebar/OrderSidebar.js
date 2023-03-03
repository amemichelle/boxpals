import "./OrderSidebar.scss";
import backarrow from "../../assets/backarrow.svg";
import forwardarrow from "../../assets/forwardarrow.svg";
import { useState, useEffect } from "react";
import OrderCard from "../../components/OrderCard/OrderCard";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";

function OrderSidebar(props) {
  const [isOpen, setIsOpen] = useState(true);
  const [isSelected, setisSelected] = useState(-1);
  const orderNumber = useParams();

  return (
    <>
      <section className={isOpen ? "sidebar open-width" : "sidebar"}>
        <div className="sidebar__top-bar">
          {isOpen && (
            <AnimatePresence>
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2
                  className="sidebar__heading"
                  style={{ opacity: isOpen ? "1" : "0" }}
                >
                  Current orders
                </h2>
              </motion.div>
            </AnimatePresence>
          )}
          <div
            className="sidebar__arrow"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <img src={isOpen ? backarrow : forwardarrow} />
          </div>
        </div>
        {isOpen &&
          props.userOrders.map((order) => {
            return (
              <OrderCard
                isopen={isOpen}
                orderData={order}
                allOrders={props.userOrders}
                active={isSelected === order.id}
                onClick={() => {
                  setisSelected(order.id);
                }}
              ></OrderCard>
            );
          })}
      </section>
    </>
  );
}

export default OrderSidebar;
