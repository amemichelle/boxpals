import "./InfoModal.scss";
import { hide } from "react-functional-modal";
import close from "../../assets/close.svg";
import { useState, useEffect } from "react";
import axios from "axios";

function InfoModal() {
  const [user, setUser] = useState({});
  let userID = sessionStorage.getItem("id");
  function findUser() {
    axios.get("http://localhost:8080/users/" + userID).then((response) => {
      setUser(response.data[0]);
    });
  }

  useEffect(() => {
    findUser();
  }, []);

  return (
    <>
      <div className="info-modal">
        <img src={close} />
        <p>
          {user.username} says to send an e-transfer to {user.email}
        </p>
      </div>
    </>
  );
}

export default InfoModal;
