import styles from "./SelfDestruct.module.css";
import { Link } from "react-router-dom";

const SelfDestruct = () => {
  return (
    <Link className={styles.button} to="/warning">
      <img
        src="./images/self-destruct.svg"
        alt="self destruct"
        className={styles.aliens}
      />
    </Link>
  );
};

export default SelfDestruct;
