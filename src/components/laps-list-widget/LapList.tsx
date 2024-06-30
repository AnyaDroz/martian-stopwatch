import { useRef } from "react";
import styles from "./LapList.module.css";
import { formatTime } from "../../utils/formatTime";
import LapViz from "./LapViz";
import { useScrollToBottom } from "../../hooks/useScroll";

export type PlanetLaps = {
  earthTime: number;
  marsTime: number;
};

type Props = {
  laps: PlanetLaps[];
};
const LapList = ({ laps }: Props) => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  useScrollToBottom(scrollContainer, laps);
  return (
    <div className={styles.container}>
      <div className={styles.list} ref={scrollContainer}>
        {laps.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.divider}></div>
            <p className={styles.message}>No records</p>
            <div className={styles.divider}></div>
          </div>
        ) : (
          laps.map((planetLaps, index) => (
            <div key={index} className={styles.lap}>
              <p className={styles.lapLabel}>
                {(index + 1).toString().padStart(2, "0")}
              </p>
              <div className={styles.earthTime}>
                <p className={styles.earthLap}>
                  {formatTime(planetLaps.earthTime)}
                </p>
              </div>
              <div className={styles.marsTime}>
                <p className={styles.marsLap}>
                  {formatTime(planetLaps.marsTime)}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
      <LapViz laps={laps} />
    </div>
  );
};

export default LapList;
