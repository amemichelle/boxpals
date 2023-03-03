import "./AddOrder.scss";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";

function AddOrder() {
  let userID = sessionStorage.getItem("id");

  function handleSubmit(event) {
    event.preventDefault();

    let splitURL = event.target.order_name.value.split("/");
    let orderID = Math.floor(Math.random() * 1000) + 1;

    let orderName = splitURL[2].split(".");

    let newOrder = {
      id: orderID,
      name: orderName[0],
      host_id: userID,
      status: "in progress",
    };

    let newParticipant = {
      id: Math.floor(Math.random() * 1000) + 1,
      user_id: userID,
      order_id: orderID,
      isHost: true,
    };

    axios.post("http://localhost:8080/orders", newOrder, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    axios.post("http://localhost:8080/participants", newParticipant, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  return (
    <>
      <div className="order-page">
        <Navbar></Navbar>

        <div className="order-page__content">
          <h1 className="order-page__header">Add Order</h1>

          <div className="order-page__form-container">
            <form className="order-page__form" onSubmit={handleSubmit}>
              <label className="order-page__label">
                Site ordering from
                <input
                  type="text"
                  name="order_name"
                  className="order-page__input"
                ></input>
              </label>

              <label className="order-page__label">
                Invite participants
                <input
                  type="text"
                  name="order_participant"
                  className="order-page__input"
                ></input>
              </label>

              <button className="order-page__button">Create order</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddOrder;
