import "./App.scss";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import Orders from "./pages/Orders/Orders";
import AddItem from "./pages/AddItem/AddItem";
import Order from "./pages/Order/Order";

import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  let username = sessionStorage.getItem("username");
  let userID = sessionStorage.getItem("id");
  let [orderData, setOrderData] = useState([]);
  let [hostedOrders, setHostedOrders] = useState([]);
  let [participants, setParticipants] = useState([]);

  function getData() {
    axios.get("http://localhost:8080/purchased").then((response) => {
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
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/"
          element={
            <Home
              username={username}
              userID={userID}
              participants={participants}
              orderData={orderData}
              hostedOrders={hostedOrders}
            />
          }
        />
        <Route
          path="/orders"
          element={<Orders userID={userID} participants={participants} />}
        ></Route>

        <Route path="/order/:orderID" element={<Order></Order>}></Route>

        <Route path="/additem" element={<AddItem />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
