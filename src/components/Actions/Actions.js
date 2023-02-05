import "./Actions.scss";
import bell from "../../assets/bell.svg";

function Actions() {
  return (
    <div className="actions">
      <div className="actions__header">
        <img src={bell} />
        <h3 className="actions__heading">Action Needed</h3>
      </div>
      <div className="actions__item">
        <p className="actions__text">ORDER #124246</p>
        <p className="actions__text">osumekeys</p>
        <p className="actions__text">Payment due</p>
      </div>
      <div className="actions__item">
        <p className="actions__text">ORDER #124246</p>
        <p className="actions__text">osumekeys</p>
        <p className="actions__text">Payment due</p>
      </div>
    </div>
  );
}

export default Actions;
