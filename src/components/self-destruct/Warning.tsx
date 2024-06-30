import styles from "./Warning.module.css";
import { motion } from "framer-motion";
import Button from "../action-bar-widget/Button";
import { useState } from "react";
import Noise from "./Noise";
import BackButton from "./BackButton";

const Warning = () => {
  const [explode, setExplode] = useState(false);
  return (
    <>
      <BackButton />
      {explode && <Noise />}
      <div className={styles.grid}>
        <div className={styles.warning}>
          <div className={styles.warningBar}>
            <div className={styles.stripeBar}>
              <h2 className={styles.label}>Warning</h2>
              <motion.div
                animate={{ translateX: "-80px" }}
                transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
                className={styles.stripes}
              ></motion.div>
            </div>
          </div>
          <p className={styles.message}>Only use in case of abduction</p>
          <div className={styles.actionBar}>
            <div className={styles.disclaimer}>
              <img src="./images/logo-white.svg" alt="logo" />
              <p className={styles.smallPrint}>
                Flow is not liable for damages, if you require assistance hire
                Anya
              </p>
            </div>
            <Button
              variant="tertiary"
              label="Self destruct"
              onClick={() => setExplode(true)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Warning;
