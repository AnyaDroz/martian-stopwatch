import styles from "./LapViz.module.css";
import { PlanetLaps } from "./LapList";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useScrollToBottom } from "../../hooks/useScroll";

type Props = {
  laps: PlanetLaps[];
};
const LapViz = ({ laps }: Props) => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const scrollContainerTwo = useRef<HTMLDivElement>(null);
  useScrollToBottom(scrollContainer, laps);
  useScrollToBottom(scrollContainerTwo, laps);
  return (
    <div className={styles.container}>
      <div className={styles.scrollContainer} ref={scrollContainer}>
        <div className={styles.lines}>
          {laps.map((planetLaps, index) => (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: planetLaps.earthTime * 0.3 }}
              transition={{ ease: "easeOut" }}
              key={index}
              className={styles.earthLine}
            ></motion.div>
          ))}
        </div>
      </div>
      <div className={styles.scrollContainer} ref={scrollContainerTwo}>
        <div className={styles.lines}>
          {laps.map((planetLaps, index) => (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: planetLaps.marsTime * 0.3 }}
              transition={{ ease: "easeOut" }}
              key={index}
              className={styles.marsLine}
            ></motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LapViz;
