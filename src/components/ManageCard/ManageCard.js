import "./ManageCard.scss";
import shoppingBag from "../../assets/shoppingbag.svg";

function ManageCard() {
  return (
    <>
      <div className="card" id="card-base">
        <div className="card__flag" id="flag">
          <img src={shoppingBag} className="card__flag-img" />
        </div>
        <h3 className="card__heading">osumekeys</h3>
      </div>
    </>
  );
}

export default ManageCard;
