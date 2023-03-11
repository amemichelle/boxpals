import "./Modal.scss";
import close from "../../assets/close.svg";
import { hide } from "react-functional-modal";
import { useState, useEffect } from "react";
import axios from "axios";

function Modal(props) {
  const [orderName, setOrderName] = useState();

  function findOrderName() {
    axios.get("http://localhost:8080/orders").then((response) => {
      let orderName = response.data.filter((order) => {
        return props.itemData.order_id === order.id;
      });
      setOrderName(orderName[0]);
    });
  }

  useEffect(() => {
    findOrderName();
  }, []);

  return (
    <div className="modal">
      <div className="modal__img-container">
        <img
          className="modal__exit"
          src={close}
          onClick={() => {
            hide();
          }}
        />
        <img className="modal__img" src={props.itemData.img_src} />
        <div className="modal__price">
          <p className="modal__price-text">${props.itemData.price}</p>
        </div>
      </div>

      <div className="modal__content">
        <p className="modal__name">{props.itemData.name}</p>
        <p className="modal__body">
          <span className="bold">specifications:</span>{" "}
          {props.itemData.specifications}
        </p>
        <p className="modal__order">
          <span className="bold">order:</span> {orderName && orderName.name}
        </p>
      </div>
    </div>
  );
}

export default Modal;
