import "./Order.scss";
import Navbar from "../../components/Navbar/Navbar";
import OrderSidebar from "../../components/OrderSidebar/OrderSidebar";
import { useLocation, useParams, Link } from "react-router-dom";
import plus from "../../assets/plus.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import UserItems from "../../components/UserItems/UserItems";
import InfoModal from "../../components/InfoModal/InfoModal";
import { show } from "react-functional-modal";
import noOrders from "../../assets/noorders.svg";

function Order() {
  const state = useLocation().state;
  const orderID = useParams(); // null when no user id
  const [itemData, setitemData] = useState([]);
  const [participantNum, setparticipantNum] = useState([]);
  const [orderInfo, setOrderInfo] = useState([]);
  const [host, setHost] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [otherparticipants, setOtherParticipants] = useState([]);

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

  useEffect(() => {
    findParticipants();
  }, [userID]);

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
    findOrders();
  }, [participants]);

  function getItems() {
    axios.get("http://localhost:8080/purchased").then((response) => {
      let filteredForOrder = response.data.filter((item) => {
        return item.order_id === parseInt(orderID.orderID);
      });

      let ids = [];

      filteredForOrder.forEach((item) => {
        if (ids.includes(item.user_id) === false) {
          ids.push(item.user_id);
        }
      });

      setparticipantNum(ids);
      setitemData(filteredForOrder);
    });
  }

  function getInfo() {
    axios.get("http://localhost:8080/orders").then((response) => {
      let filteredInfo = response.data.filter((order) => {
        return order.id === parseInt(orderID.orderID);
      });

      setOrderInfo(filteredInfo);
    });

    axios.get("http://localhost:8080/users").then((response) => {
      let hostID = response.data.filter((users) => {
        if (orderInfo[0]) {
          return users.id === orderInfo[0].host_id;
        } else {
          return false;
        }
      });

      let peopleOrdering = [];
      participantNum.forEach((person) => {
        let peoples = response.data.filter((users) => {
          return users.id === person;
        });
        peopleOrdering.push(peoples);
      });

      setHost(hostID[0]);
      setOtherParticipants(peopleOrdering);
    });
  }

  useEffect(() => {
    getInfo();
    getItems();
  }, [orderID, participantNum]);

  return (
    <>
      {Object.keys(orderID).length > 0 ? (
        <section className="order">
          <Navbar></Navbar>
          <OrderSidebar userOrders={state}></OrderSidebar>
          <div className="order__body">
            <div className="order__top-bar">
              <div className="order__corner-info">
                <p className="order__num">ORDER #</p>
                <p className="order__name">
                  {orderInfo[0] && orderInfo[0].name}
                </p>
              </div>
              <Link to="/additem">
                <div className="order__add">
                  <img className="order__add-icon" src={plus} />
                  <p className="order__add-text">Add new item to order</p>
                </div>
              </Link>
            </div>
            <div className="order__key-info">
              <p className="info__heading">Key Information</p>
              <div className="info__container">
                <div className="info__pair">
                  <p className="info__label">Host</p>
                  <p
                    className="info__details"
                    onClick={() => {
                      show(<InfoModal></InfoModal>, {
                        fading: true,
                        clickOutsideToClose: true,
                        style: { background: "rgba(0,0,0,0.8)" },
                      });
                    }}
                  >
                    {host && host.username}
                  </p>
                </div>
                <div className="info__pair">
                  <p className="info__label">Status</p>
                  <p className="info__details">
                    {orderInfo[0] && orderInfo[0].status}
                  </p>
                </div>
                <div className="info__pair">
                  <p className="info__label">Participants</p>
                  <p className="info__details">{participantNum.length}</p>
                </div>
              </div>
            </div>
            {participantNum.map((person) => {
              return (
                <UserItems
                  key={person}
                  userID={person}
                  itemData={itemData}
                  participants={otherparticipants}
                ></UserItems>
              );
            })}
          </div>
        </section>
      ) : (
        <section className="orders">
          <Navbar></Navbar>
          {userOrders && <OrderSidebar userOrders={userOrders}></OrderSidebar>}
          <div className="orders__empty">
            <img src={noOrders} className="orders__empty-img" />
          </div>
        </section>
      )}
    </>
  );
}

export default Order;
