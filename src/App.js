import "./App.scss";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import AddItem from "./pages/AddItem/AddItem";
import AddOrder from "./pages/AddOrder/AddOrder";
import Order from "./pages/Order/Order";

import { useState } from "react";

function App() {
  let [userID, setuserID] = useState(sessionStorage.getItem("id"));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setuserID={setuserID} />}></Route>
        <Route path="/signup" element={<Signup />}></Route>

        <Route path="/" element={<Home />} />

        <Route path="/orders" element={<Order />}></Route>
        <Route path="/order/:orderID" element={<Order></Order>}></Route>

        <Route path="/additem" element={<AddItem />}></Route>
        <Route path="/addorder" element={<AddOrder></AddOrder>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
