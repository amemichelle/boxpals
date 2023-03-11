import "./Orders.scss";
import Navbar from "../../components/Navbar/Navbar";
import OrderSidebar from "../../components/OrderSidebar/OrderSidebar";
import noOrders from "../../assets/noorders.svg";

import axios from "axios";
import { useEffect, useState } from "react";

function Orders() {
  let [participants, setParticipants] = useState([]);
  let [userID, setuserID] = useState(sessionStorage.getItem("id"));
  const [userOrders, setUserOrders] = useState([]);

  function findParticipants() {
    axios.get("http://localhost:8080/participants").then((response) => {
      let people = response.data.filter((order) => {
        return order.user_id === parseInt(userID);
      });

      setParticipants(people);
    });
  }

  function findOrders() {
    axios.get("http://localhost:8080/orders").then((response) => {
      let participating = response.data.filter((order) => {
        return participants.find((participant) => {
          return participant.order_id === order.id;
        });
      });

      setUserOrders(participating);
    });
  }

  useEffect(() => {
    findParticipants();
  }, [userID]);

  useEffect(() => {
    findOrders();
  }, [participants]);

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
