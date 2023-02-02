import "./Orders.scss";
import Navbar from "../../components/Navbar/Navbar";
import OrderSidebar from "../../components/OrderSidebar/OrderSidebar";

function Orders() {
  return (
    <>
      <section className="orders">
        <Navbar></Navbar>
        <OrderSidebar></OrderSidebar>
      </section>
    </>
  );
}

export default Orders;
