import "./OrderCard.scss";
import cart from "../../assets/cart.svg";
import circledivider from "../../assets/circledivider.svg";
import group from "../../assets/group.svg";
import statuscomplete from "../../assets/statuscomplete.svg";
import { motion, AnimatePresence } from "framer-motion";

function OrderCard(props) {
  return (
    <div style={{ overflow: "hidden" }}>
      <AnimatePresence>
        {props.isopen && (
          <motion.div
            className="card"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="card__number">ORDER #97658</p>
            <h3 className="card__name">osumekeys</h3>

            <div className="card__container">
              <div className="card__info-block">
                <img className="card__info-img" src={statuscomplete} />
                <p className="card__info">Completed</p>
              </div>
              <img className="card__info-img" src={circledivider} />
              <div className="card__info-block">
                <img className="card__info-img" src={cart} />
                <p className="card__info">2 Items</p>
              </div>
              <img className="card__info-img" src={circledivider} />

              <div className="card__info-block">
                <img className="card__info-img" src={group} />
                <p className="card__info">3 Participants</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default OrderCard;
