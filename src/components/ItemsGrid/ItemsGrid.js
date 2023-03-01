import addedCart from "../../assets/addedcart.svg";
import "./ItemsGrid.scss";

import { show } from "react-functional-modal";
import Modal from "../Modal/Modal";

function ItemsGrid(props) {
  return (
    <>
      <div className="grid">
        <div className="grid__header">
          <img src={addedCart} />
          <h3 className="actions__heading">Items Purchased</h3>
        </div>
        <div className="grid__photos">
          {props.orderData.map((item) => {
            return (
              <img
                key={item.id}
                className="grid__photo"
                src={item.img_src}
                onClick={() => {
                  show(<Modal itemData={item} />, {
                    fading: true,
                    clickOutsideToClose: true,
                    style: { background: "rgba(0, 0, 0, 0.8)" },
                  });
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ItemsGrid;
