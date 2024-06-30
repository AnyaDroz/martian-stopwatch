import styles from "./MarsClockFace.module.css";
import { motion } from "framer-motion";
import { clockNumbers, dial, stagger } from "../../motion";

type Props = {
  angle: number;
};
const MarsClockFace = ({ angle }: Props) => {
  const renderNumber = (index: number) => {
    if (index % 5 === 0) {
      return <div className={styles.number}>{index}</div>;
    }
    return null;
  };
  return (
    <div className={styles.clockFace}>
      <div
        className={styles.clockHand}
        style={{
          transform: `translate(-50%, -50%) rotate(${angle}deg)`,
        }}
      >
        <div className={styles.tipContainer}>
          <div className={styles.clockHandTip}></div>
          <div className={styles.tipCounter}></div>
        </div>
      </div>
      <motion.div variants={stagger} initial="start" animate="end">
        {Array.from({ length: 60 }).map((tick, index) => (
          <motion.div
            variants={dial}
            className={styles.dialTick}
            key={index}
            style={{
              width: index % 5 === 0 ? "4px" : "1px",
              transform: `translate(-50%, -50%) rotate(${(index + 30) * (360 / 60)}deg)`,
            }}
          ></motion.div>
        ))}
      </motion.div>
      <motion.div variants={stagger} initial="start" animate="end">
        {Array.from({ length: 60 }).map((tick, index) => (
          <motion.div
            variants={clockNumbers}
            key={index}
            className={styles.numbers}
            style={{
              transform: `translate(-50%, -50%) rotate(${index * (360 / 60)}deg)`,
            }}
          >
            {renderNumber(index)}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarsClockFace;
