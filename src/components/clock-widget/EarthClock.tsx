import styles from "./EarthClock.module.css";

type Props = {
  angle: number;
};

const EarthClock = ({ angle }: Props) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.clockHand}
        style={{
          transform: `translate(-50%, -50%) rotate(${angle}deg)`,
        }}
      ></div>
      <img src="images/globe.svg" alt="planet earth" className={styles.globe} />
    </div>
  );
};

export default EarthClock;
