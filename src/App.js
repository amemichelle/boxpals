import "./App.scss";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import Orders from "./pages/Orders/Orders";
import AddItem from "./pages/AddItem/AddItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/additem" element={<AddItem />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
