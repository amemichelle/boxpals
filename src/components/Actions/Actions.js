import bell from "../../assets/bell.svg";

function Actions() {
  return (
    <div className="actions">
      <div className="actions__header">
        <img src={bell} />
        <h3 className="actions__heading">Action Needed</h3>
      </div>
    </div>
  );
}

export default Actions;
