import "./OrderCard.scss";
import cart from "../../assets/cart.svg";
import circledivider from "../../assets/circledivider.svg";
import group from "../../assets/group.svg";
import statuscomplete from "../../assets/statuscomplete.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function OrderCard(props) {
  const navigate = useNavigate();

  function handleClick() {
    props.onClick();
    navigate("/order/" + props.orderData.id, { state: props.allOrders });
  }

  return (
    <div style={{ overflow: "hidden" }}>
      <AnimatePresence>
        {props.isopen && (
          <motion.div
            className={props.active ? "cards selected" : "cards"}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClick}
          >
            <p className="cards__number">ORDER #{props.orderData.id}</p>
            <h3 className="cards__name">{props.orderData.name}</h3>

            <div className="cards__container">
              <div className="cards__info-block">
                <img className="cards__info-img" src={statuscomplete} />
                <p className="cards__info">{props.orderData.status}</p>
              </div>
              <img className="cards__info-img" src={circledivider} />
              <div className="cards__info-block">
                <img className="cards__info-img" src={cart} />
                <p className="cards__info">2 Items</p>
              </div>
              <img className="cards__info-img" src={circledivider} />

              <div className="cards__info-block">
                <img className="cards__info-img" src={group} />
                <p className="cards__info">3 Participants</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default OrderCard;
