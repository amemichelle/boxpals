import addedCart from "../../assets/addedcart.svg";
import "./ItemsGrid.scss";
import Kep1er from "../../assets/kep1er.jpg";
import TripleS from "../../assets/triples.jpg";
import NewJeans from "../../assets/newjeans.jpg";
import { show } from "react-functional-modal";
import Modal from "../Modal/Modal";

// function openModal(item) {
//   show(<Modal itemData={item}></Modal>);
// }

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
