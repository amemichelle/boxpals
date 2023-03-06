import "./Home.scss";
import Navbar from "../../components/Navbar/Navbar";
import MobileNav from "../../components/MobileNav/MobileNav";
import Actions from "../../components/Actions/Actions";
import ItemsGrid from "../../components/ItemsGrid/ItemsGrid";
import ManageCard from "../../components/ManageCard/ManageCard";

import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  let username = sessionStorage.getItem("username");

  let [userID, setuserID] = useState(sessionStorage.getItem("id"));
  let [orderData, setOrderData] = useState([]);
  let [hostedOrders, setHostedOrders] = useState([]);
  let [participants, setParticipants] = useState([]);

  function getData() {
    axios.get("http://localhost:8080/items").then((response) => {
      let filteredList = response.data.filter((item) => {
        return item.user_id === parseInt(userID);
      });
      setOrderData(filteredList);
    });

    axios.get("http://localhost:8080/orders").then((response) => {
      let hostedOrders = response.data.filter((order) => {
        return order.host_id === parseInt(userID);
      });

      setHostedOrders(hostedOrders);
    });

    axios.get("http://localhost:8080/participants").then((response) => {
      let people = response.data.filter((order) => {
        return order.user_id === parseInt(userID);
      });

      setParticipants(people);
    });
  }

  useEffect(() => {
    getData();
  }, [userID]);

  return (
    <>
      <MobileNav></MobileNav>
      <section className="home">
        <Navbar></Navbar>
        <div className="home__main">
          <div className="home__header">
            <p className="home__heading">Hi {username}!</p>
          </div>
          <div className="home__body">
            <Actions participants={participants}></Actions>
            <ItemsGrid orderData={orderData}></ItemsGrid>
          </div>
        </div>
        <div className="home__right-bar">
          <h3>Group Orders You Manage</h3>
          <ManageCard orderData={hostedOrders}></ManageCard>
        </div>
      </section>
    </>
  );
}

export default Home;
