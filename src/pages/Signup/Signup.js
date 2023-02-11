import "./Signup.scss";
import snake from "../../assets/snake.svg";
import circle from "../../assets/circle.svg";
import tape from "../../assets/tape.svg";
import axios from "axios";
function Signup() {
  function handleSubmit(event) {
    event.preventDefault();

    const newUser = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    axios
      .post("http://localhost:8080/signup", newUser, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })

      .then((response) => {
        console.log(response);
      });
  }

  return (
    <>
      <section className="signup">
        <div className="signup__container">
          <img src={tape} className="signup__stickers-tape" />

          <h1 className="signup__heading">SIGN UP</h1>
          <form className="signup__form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter email address"
              className="signup__input"
              name="email"
            />

            <input
              type="text"
              placeholder="Enter username"
              className="signup__input"
              name="username"
            />

            <input
              type="text"
              placeholder="Enter password"
              className="signup__input"
              name="password"
            />

            <button type="submit" className="signup__submit">
              signup
            </button>
          </form>
        </div>

        <img src={snake} className="signup__stickers-snake" />
        <img src={circle} className="signup__stickers-circle" />
      </section>
    </>
  );
}

export default Signup;
