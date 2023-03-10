import "./AddItem.scss";
import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddItem() {
  const [url, seturl] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [specs, setSpecs] = useState("");
  const [options, setOptions] = useState();
  const [itemlink, setItemLink] = useState("");
  const [selected, setSelected] = useState();
  const navigate = useNavigate();

  const showNotif = () => {
    toast.success(
      "Your item was successfully added! Navigating to your order...",
      {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      }
    );
  };

  let [participants, setParticipants] = useState([]);

  let [userID, setuserID] = useState(sessionStorage.getItem("id"));

  function getOptions() {
    axios
      .get("http://localhost:8080/participants")
      .then((response) => {
        let people = response.data.filter((order) => {
          return order.user_id === parseInt(userID);
        });

        setParticipants(people);
      })
      .then(() => {
        axios.get("http://localhost:8080/orders").then((response) => {
          let participating = response.data.filter((order) => {
            return participants.find((participant) => {
              return participant.order_id === order.id;
            });
          });

          let optionObjects = [];
          participating.map((order) => {
            if (order.status != "completed") {
              let option = {
                label: order.name,
                value: order.id,
              };

              optionObjects.push(option);
            }
          });

          setOptions(optionObjects);
        });
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let newItem = {
      id: Math.floor(Math.random() * 1000) + 1,
      name: name,
      img_src: url,
      item_link: itemlink,
      price: price,
      specifications: specs,
      order_id: selected.value,
      user_id: userID,
    };

    axios.post("http://localhost:8080/purchased", newItem, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    navigate("/order/" + selected.value);
  }

  useEffect(() => {
    getOptions();
  }, []);

  return (
    <>
      <div className="page">
        <Navbar></Navbar>

        <div className="page__content">
          <h1 className="header">Add Items</h1>

          <div className="container">
            <form className="item-form" onSubmit={handleSubmit}>
              <label className="item-form__label">
                Image URL
                <input
                  type="text"
                  className="item-form__input"
                  name="url"
                  onChange={(e) => {
                    seturl(e.target.value);
                  }}
                />
              </label>

              <label className="item-form__label">
                Name
                <input
                  type="text"
                  className="item-form__input"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </label>

              <label className="item-form__label">
                Link
                <input
                  type="text"
                  className="item-form__input"
                  onChange={(e) => {
                    setItemLink(e.target.value);
                  }}
                />
              </label>

              <label className="item-form__label">
                Specificiations
                <input
                  type="text"
                  onChange={(e) => {
                    setSpecs(e.target.value);
                  }}
                  className="item-form__input"
                />
              </label>

              <label className="item-form__label">
                Quantity
                <input type="text" className="item-form__input" />
              </label>

              <label className="item-form__label">
                Price
                <input
                  type="text"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  className="item-form__input"
                />
              </label>
              <label className="item-form__label">Adding to</label>
              {options && <Select options={options} onChange={setSelected} />}
              <button className="item-form__button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="preview">
          {url && (
            <div className="img-preview">
              <img
                src={url}
                className="page__img"
                alt="visual of item being added to a group order"
              />
            </div>
          )}
          <p className="preview__name">{name}</p>
          <div className="preview__content">
            {price && <p className="preview__desc">${price}</p>}
            {specs && (
              <p className="preview__desc no-padding">
                <span className="preview__accent">&#10042;</span>
                {specs}
              </p>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default AddItem;
