import "./AddItem.scss";
import Navbar from "../../components/Navbar/Navbar";

function AddItem() {
  return (
    <>
      <div className="page">
        <Navbar></Navbar>

        <div className="page__content">
          <h1 className="header">Add Items</h1>

          <div className="container">
            <div className="img-preview"></div>
            <form className="item-form">
              <label className="item-form__label">
                Image URL
                <input type="text" className="item-form__input" />
              </label>

              <label className="item-form__label">
                Name
                <input type="text" className="item-form__input" />
              </label>

              <label className="item-form__label">
                Link
                <input type="text" className="item-form__input" />
              </label>

              <label className="item-form__label">
                Specificiations
                <input type="text" className="item-form__input" />
              </label>

              <label className="item-form__label">
                Quantity
                <input type="text" className="item-form__input" />
              </label>

              <label className="item-form__label">
                Price
                <input type="text" className="item-form__input" />
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddItem;
