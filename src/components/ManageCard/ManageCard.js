import "./ManageCard.scss";
import shoppingBag from "../../assets/shoppingbag.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function ManageCard() {
  const [isVisbible, setIsVisibile] = useState(false);

  return (
    <>
      <div className="card">
        <AnimatePresence>
          <motion.div className="card__flag">
            <img src={shoppingBag} className="card__flag-img" />
          </motion.div>
        </AnimatePresence>
        <h3 className="card__heading">osumekeys</h3>
      </div>
    </>
  );
}

export default ManageCard;
