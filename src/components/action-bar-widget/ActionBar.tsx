import styles from "./ActionBar.module.css";
import Button from "./Button";
import Reset from "./Reset";
import TimeDisplay from "./TimeDisplay";

type Props = {
  isCounting: boolean;
  earthTime: number;
  marsTime: number;
  startStop: () => void;
  logLap: () => void;
  reset: () => void;
};
const ActionBar = ({
  reset,
  isCounting,
  earthTime,
  marsTime,
  startStop,
  logLap,
}: Props) => {
  return (
    <div className={styles.container}>
      <Reset reset={reset} />
      <TimeDisplay earthTime={earthTime} marsTime={marsTime} />
      <div className={styles.buttonContainer}>
        <Button
          variant="secondary"
          label="Lap"
          onClick={logLap}
          disabled={!isCounting}
        />
        <Button
          variant="primary"
          label={isCounting ? "Stop" : "Start"}
          onClick={startStop}
        />
      </div>
    </div>
  );
};

export default ActionBar;
