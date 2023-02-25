import "./Orders.scss";
import Navbar from "../../components/Navbar/Navbar";
import OrderSidebar from "../../components/OrderSidebar/OrderSidebar";
import noOrders from "../../assets/noorders.svg";

import axios from "axios";
import { useEffect, useState } from "react";

function Orders(props) {
  const [userOrders, setUserOrders] = useState([]);

  function findOrders() {
    axios.get("http://localhost:8080/orders").then((response) => {
      let participating = response.data.filter((order) => {
        return props.participants.find((participant) => {
          return participant.order_id === order.id;
        });
      });

      setUserOrders(participating);
    });
  }

  console.log(userOrders);

  useEffect(() => {
    findOrders();
  }, []);

  return (
    <>
      <section className="orders">
        <Navbar></Navbar>
        {userOrders && <OrderSidebar userOrders={userOrders}></OrderSidebar>}
        <div className="orders__empty">
          <img src={noOrders} className="orders__empty-img" />
        </div>
      </section>
    </>
  );
}

export default Orders;
