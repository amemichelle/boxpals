import "./Home.scss";
import Navbar from "../../components/Navbar/Navbar";
import Actions from "../../components/Actions/Actions";
import ItemsGrid from "../../components/ItemsGrid/ItemsGrid";
import ManageCard from "../../components/ManageCard/ManageCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { type } from "@testing-library/user-event/dist/type";

function Home() {
  let username = sessionStorage.getItem("username");
  let userID = sessionStorage.getItem("id");
  let [orderData, setOrderData] = useState([]);
  function getData() {
    axios.get("http://localhost:8080/purchased").then((response) => {
      let filteredList = response.data.filter((item) => {
        return item.user_id === parseInt(userID);
      });
      setOrderData(filteredList);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section className="home">
        <Navbar></Navbar>
        <div className="home__main">
          <div className="home__header">
            <p className="home__heading">Hi {username}!</p>
          </div>
          <div className="home__body">
            <Actions></Actions>
            <ItemsGrid orderData={orderData}></ItemsGrid>
          </div>
        </div>
        <div className="home__right-bar">
          <h3>Group Orders You Manage</h3>
          <ManageCard></ManageCard>
        </div>
      </section>
    </>
  );
}

export default Home;
