import "./Login.scss";
import snake from "../../assets/snake.svg";
import circle from "../../assets/circle.svg";
import tape from "../../assets/tape.svg";
function Login() {
  return (
    <>
      <section className="login">
        <div className="login__container">
          <img src={tape} className="login__stickers-tape" />

          <h1 className="login__heading">LOG IN</h1>
          <form className="login__form">
            <input
              type="text"
              placeholder="Enter username"
              className="login__input"
            />

            <input
              type="text"
              placeholder="Enter password"
              className="login__input"
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
