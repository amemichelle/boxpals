import "./InfoModal.scss";
import { hide } from "react-functional-modal";
import close from "../../assets/close.svg";
import { useState, useEffect } from "react";
import axios from "axios";

function InfoModal() {
  const [user, setUser] = useState({});
  let userID = sessionStorage.getItem("id");

  function findUser() {
    axios.get("http://localhost:8080/users").then((response) => {
      console.log(response);
      let user = response.data.filter((user) => {
        return user.id === userID;
      });

      // localhost:8080/users/:userid

      setUser(user);
    });
  }

  useEffect(() => {
    findUser();
  }, []);

  console.log(user);

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
