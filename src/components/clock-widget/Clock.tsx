import styles from "./Clock.module.css";
import EarthClock from "./EarthClock";
import MarsClockFace from "./MarsClockFace";
import SelfDestruct from "./SelfDestruct";

type Props = {
  earthHand: number;
  marsHand: number;
};
const Clock = ({ earthHand, marsHand }: Props) => {
  return (
    <div className={styles.container}>
      <SelfDestruct />
      <img src="./images/app-logo.svg" alt="logo" className={styles.logo} />
      <EarthClock angle={earthHand} />
      <MarsClockFace angle={marsHand} />
    </div>
  );
};

export default Clock;
