import "./Orders.scss";
import Navbar from "../../components/Navbar/Navbar";
import OrderSidebar from "../../components/OrderSidebar/OrderSidebar";
import noOrders from "../../assets/noorders.svg";
function Orders() {
  return (
    <>
      <section className="orders">
        <Navbar></Navbar>
        <OrderSidebar></OrderSidebar>
        <div className="orders__empty">
          <img src={noOrders} className="orders__empty-img" />
        </div>
      </section>
    </>
  );
}

export default Orders;
