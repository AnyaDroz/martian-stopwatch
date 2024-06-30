import styles from "./Reset.module.css";

type Props = {
  reset: () => void;
};

const Reset = ({ reset }: Props) => {
  return (
    <div className={styles.container}>
      <button className={styles.ellipse} onClick={reset}>
        <p className={styles.text}>reset</p>
      </button>
    </div>
  );
};

export default Reset;
