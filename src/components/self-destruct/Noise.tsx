import { motion } from "framer-motion";
import styles from "./Noise.module.css";

const Noise = () => {
  return (
    <motion.div
      className={styles.noiseWrapper}
      initial={{ height: "0%" }}
      animate={{ height: "100%" }}
      transition={{ duration: 8, ease: "easeIn" }}
    >
      <motion.div
        className={styles.noise}
        animate={{ backgroundPosition: "50% 0, 60% 50%" }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.2 }}
      ></motion.div>
    </motion.div>
  );
};

export default Noise;
