import "./Modal.scss";
import close from "../../assets/close.svg";
import { hide } from "react-functional-modal";

function Modal(props) {
  console.log(props.itemData);

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
          The order it's in goes here but it's in a dfferent place o.o
        </p>
      </div>
    </div>
  );
}

export default Modal;
