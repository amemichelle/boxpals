import "./ManageCard.scss";
import shoppingBag from "../../assets/shoppingbag.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function ManageCard() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div
        className="card"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <AnimatePresence>
          <motion.div
            initial={false}
            animate={{ height: isVisible ? "50px" : 0 }}
            className="card__flag"
          >
            <img src={shoppingBag} className="card__flag-img" />
            <motion.div className="zigzag-container">
              <div className="zigzag"></div>
              <div className="zigzag"></div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <h3 className="card__heading">osumekeys</h3>
      </div>
    </>
  );
}

export default ManageCard;
