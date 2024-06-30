import { useEffect, useState } from "react";
import styles from "./SoundWidget.module.css";

type Props = {
  soundOn: (newState: boolean) => void;
};
const SoundWidget = ({ soundOn }: Props) => {
  const [toggle, setToggle] = useState(true);

  const soundToggle = () => {
    setToggle((flag) => !flag);
  };

  useEffect(() => {
    soundOn(toggle);
  }, [toggle]);
  return (
    <div className={styles.container}>
      <button
        onClick={soundToggle}
        className={styles.toggle}
        style={{ justifyContent: toggle ? "flex-start" : "flex-end" }}
      >
        <div className={styles.toggleButton}>
          <img src="images/sound.svg" alt="sound" className={styles.globe} />
        </div>
        <div className={styles.labels}>
          <label className={styles.label}>Off</label>
          <label className={styles.label}>On</label>
        </div>
      </button>
    </div>
  );
};

export default SoundWidget;
