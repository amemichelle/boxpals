import "./Home.scss";
import Navbar from "../../components/Navbar/Navbar";
import Actions from "../../components/Actions/Actions";
import ItemsGrid from "../../components/ItemsGrid/ItemsGrid";
import ManageCard from "../../components/ManageCard/ManageCard";

function Home() {
  return (
    <>
      <section className="home">
        <Navbar></Navbar>
        <div className="home__main">
          <div className="home__header">
            <p className="home__heading">Hi Michelle!</p>
          </div>
          <div className="home__body">
            <Actions></Actions>
            <ItemsGrid></ItemsGrid>
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
