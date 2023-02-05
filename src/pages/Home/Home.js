import "./Home.scss";
import Navbar from "../../components/Navbar/Navbar";
import Actions from "../../components/Actions/Actions";
import ItemsGrid from "../../components/ItemsGrid/ItemsGrid";

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
      </section>
    </>
  );
}

export default Home;
