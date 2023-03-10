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
import MobileNav from "../../components/MobileNav/MobileNav";

function Order() {
  const state = useLocation().state;
  const orderID = useParams(); // null when no user id
  const [itemData, setitemData] = useState([]);
  const [participantNum, setparticipantNum] = useState([]);
  const [orderInfo, setOrderInfo] = useState([]);
  const [host, setHost] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [otherparticipants, setOtherParticipants] = useState([]);
  const [orderTotal, setorderTotal] = useState();

  let [userID, setuserID] = useState(sessionStorage.getItem("id"));
  const [userOrders, setUserOrders] = useState([]);
  const [viewport, setViewport] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function findParticipants() {
    axios
      .get("http://localhost:8080/participants/" + userID)
      .then((response) => {
        setParticipants(response.data);
      });
  }

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
    findParticipants();
  }, [userID]);

  useEffect(() => {
    findOrders();
  }, [participants]);

  function getItems() {
    axios.get("http://localhost:8080/items").then((response) => {
      let filteredForOrder = response.data.filter((item) => {
        return item.order_id === parseInt(orderID.orderID);
      });

      let ids = [];
      let total = 0;
      // get total here : )

      filteredForOrder.forEach((item) => {
        if (ids.includes(item.user_id) === false) {
          ids.push(item.user_id);
        }

        total += Number(item.price);
      });
      setorderTotal(total.toFixed(2));
      setparticipantNum(ids);
      console.log(participantNum);
      setitemData(filteredForOrder);
    });
  }

  useEffect(() => {
    getItems();
  }, [orderID]);

  function getOrder() {
    axios
      .get("http://localhost:8080/orders/" + orderID.orderID)
      .then((response) => {
        setOrderInfo(response.data);
      });
  }

  useEffect(() => {
    getOrder();
  }, [orderID]);

  function getHost() {
    if (orderInfo.length > 0) {
      axios
        .get("http://localhost:8080/users/" + orderInfo[0].host_id)
        .then((response) => {
          if (orderInfo[0] && orderInfo[0].host_id === response.data[0].id) {
            setHost(response.data[0]);
          } else {
            return false;
          }
        });
    }
  }

  useEffect(() => {
    getHost();
  }, [orderInfo]);

  function getInfo() {
    // goal: if orderInfo.host_id is not equal undefined, run this axios call

    axios.get("http://localhost:8080/users").then((response) => {
      let peopleOrdering = [];
      participantNum.forEach((person) => {
        let peoples = response.data.find((users) => {
          return users.id === person;
        });
        peopleOrdering.push(peoples);
      });

      setOtherParticipants(peopleOrdering);
    });
  }

  useEffect(() => {
    getInfo();
  }, [participantNum]);

  return (
    <>
      <MobileNav></MobileNav>
      <Navbar></Navbar>

      <section className="orders">
        {((Object.keys(orderID).length > 0 && viewport.width > 768) ||
          Object.keys(orderID).length === 0) && (
          <OrderSidebar userOrders={userOrders}></OrderSidebar>
        )}
        {Object.keys(orderID).length > 0 ? (
          <>
            <div className="order__body">
              <div className="order__top-bar">
                <div className="order__corner-info">
                  <p className="order__num">
                    ORDER #{orderInfo[0] && orderInfo[0].id}
                  </p>
                  <p className="order__name">
                    {orderInfo[0] && orderInfo[0].name}
                  </p>
                </div>
                <Link to="/additem" className="order__add-link">
                  <div className="order__add">
                    <img className="order__add-icon" src={plus} />
                    <p className="order__add-text">Add item</p>
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
              {participantNum &&
                participantNum.map((person) => {
                  return (
                    <UserItems
                      key={person}
                      userID={person}
                      itemData={itemData}
                      participants={otherparticipants}
                    ></UserItems>
                  );
                })}

              <p className="order__total">
                Order total: ${orderTotal && orderTotal}
              </p>
            </div>
          </>
        ) : (
          <div className="orders__empty">
            <img src={noOrders} className="orders__empty-img" />
          </div>
        )}
      </section>
    </>
  );
}

export default Order;
