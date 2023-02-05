import "./Home.scss";
import Navbar from "../../components/Navbar/Navbar";
import Actions from "../../components/Actions/Actions";

function Home() {
  return (
    <>
      <section className="home">
        <Navbar></Navbar>

        <div className="home__header">
          <p className="home__heading">Hi Michelle!</p>
        </div>

        <Actions></Actions>
      </section>
    </>
  );
}

export default Home;
