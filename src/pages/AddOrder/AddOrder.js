import "./AddOrder.scss";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import MobileNav from "../../components/MobileNav/MobileNav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
function AddOrder() {
  let userID = sessionStorage.getItem("id");
  const navigate = useNavigate();
  const showNotif = () => {
    toast.success(
      "Your order was successfully created! Navigating to your order...",
      {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      }
    );
  };

  function handleSubmit(event) {
    event.preventDefault();

    let splitURL = event.target.order_name.value.split("/");
    let orderID = Math.floor(Math.random() * 1000) + 1;
    let orderName = splitURL[2].split(".");

    let participantEmail = event.target.order__participants.value;
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

    axios
      .get("http://localhost:8080/users/participant/" + participantEmail)
      .then((response) => {
        let invitedParticipant = {
          id: Math.floor(Math.random() * 1000) + 1,
          user_id: response.data[0].id,
          order_id: orderID,
          isHost: false,
        };

        axios.post("http://localhost:8080/participants", invitedParticipant, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
      });

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

    setTimeout(() => {
      navigate("/order/" + orderID);
    }, 3000);
  }

  return (
    <>
      <MobileNav></MobileNav>
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
                  name="order__participants"
                  className="order-page__input"
                ></input>
              </label>

              <button className="order-page__button" onClick={showNotif}>
                Create order
              </button>
              <ToastContainer />
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
}

export default AddOrder;
