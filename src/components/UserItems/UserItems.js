import "./UserItems.scss";
import { useEffect, useState } from "react";

function UserItems(props) {
  const [items, setItems] = useState([]);
  const [owner, setOwner] = useState({});
  const [subtotal, setSubtotal] = useState();
  function findItems() {
    let userItems = props.itemData.filter((item) => {
      return item.user_id === props.userID;
    });

    setItems(userItems);
  }

  function findUsername() {
    let x = props.participants.find((user) => {
      return user.id && user.id === props.userID;
    });

    setOwner(x);
  }

  function getSubtotal() {
    let sum = 0;
    items.map((item) => {
      sum += Number(item.price);
    });

    setSubtotal(sum.toFixed(2));
  }

  useEffect(() => {
    findUsername();
    findItems();
    getSubtotal();
  }, [props.participants]);

  return (
    <>
      <div className="participant">
        <div className="participant__top-bar">
          <p className="participant__name">{owner && owner.username}</p>
          <p className="participant__subtotal">Subtotal:${subtotal}</p>
        </div>

        {items &&
          items.map((item) => {
            return (
              <div className="participant__item">
                <div className="participant__item-img-box">
                  <img className="participant__item-img" src={item.img_src} />
                </div>
                <div className="participant__item-content">
                  <p className="participant__item-name">{item.name}</p>
                  <p className="participant__item-desc">
                    {item.price} &#10042; {item.specifications}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default UserItems;
