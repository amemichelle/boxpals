import addedCart from "../../assets/addedcart.svg";
import "./ItemsGrid.scss";
import Kep1er from "../../assets/kep1er.jpg";
import TripleS from "../../assets/triples.jpg";
import NewJeans from "../../assets/newjeans.jpg";

function ItemsGrid() {
  return (
    <>
      <div className="grid">
        <div className="grid__header">
          <img src={addedCart} />
          <h3 className="actions__heading">Items Purchased</h3>
        </div>
        <div className="grid__photos">
          <img className="grid__photo" src={Kep1er} />
          <img className="grid__photo" src={TripleS} />
          <img className="grid__photo" src={NewJeans} />
          <img className="grid__photo" src={Kep1er} />
          <img className="grid__photo" src={TripleS} />
          <img className="grid__photo" src={NewJeans} />
        </div>
      </div>
    </>
  );
}

export default ItemsGrid;
