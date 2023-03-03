import "./Actions.scss";
import bell from "../../assets/bell.svg";
import axios from "axios";
import { useState, useEffect } from "react";

function Actions(props) {
  // find orders where logged in user is a participant

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

  useEffect(() => {
    findOrders();
  }, [props.participants]);

  return (
    <div className="actions">
      <div className="actions__header">
        <img src={bell} />
        <h3 className="actions__heading">Action Needed</h3>
      </div>

      {userOrders.map((order) => {
        return (
          <div className="actions__item" key={order.id}>
            <p className="actions__text" id="order-num">
              ORDER #{order.id}
            </p>
            <p className="actions__text">{order.name}</p>
            <p className="actions__text">{order.status}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Actions;
