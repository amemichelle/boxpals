import "./Login.scss";
import snake from "../../assets/snake.svg";
import circle from "../../assets/circle.svg";
import tape from "../../assets/tape.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function submitForm(event) {
    event.preventDefault();

    const currentUser = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    axios
      .post("http://localhost:8080/login", currentUser, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        sessionStorage.setItem("username", response.data[0].username);
        sessionStorage.setItem("id", response.data[0].id);
        navigate("/");
      });
  }

  return (
    <>
      <section className="login">
        <div className="login__container">
          <img src={tape} className="login__stickers-tape" />

          <h1 className="login__heading">LOG IN</h1>
          <form className="login__form" onSubmit={submitForm}>
            <input
              type="text"
              placeholder="Enter username"
              className="login__input"
              name="username"
            />

            <input
              type="text"
              placeholder="Enter password"
              className="login__input"
              name="password"
            />

            <button type="submit" className="login__submit">
              Login
            </button>
          </form>
        </div>

        <img src={snake} className="login__stickers-snake" />
        <img src={circle} className="login__stickers-circle" />
      </section>
    </>
  );
}

export default Login;
