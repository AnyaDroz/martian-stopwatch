import { formatTime } from "../../utils/formatTime";
import styles from "./TimeDisplay.module.css";

type Props = {
  earthTime: number;
  marsTime: number;
};
const TimeDisplay = ({ earthTime, marsTime }: Props) => {
  return (
    <div className={styles.timeDisplay}>
      <div className={styles.timeContainer}>
        <p className={styles.label}>Earth</p>
        <p className={styles.earthTime}>{formatTime(earthTime)}</p>
      </div>
      <div className={styles.timeContainerMars}>
        <p className={styles.label}>Mars</p>
        <p className={styles.marsTime}>{formatTime(marsTime)}</p>
      </div>
    </div>
  );
};

export default TimeDisplay;
