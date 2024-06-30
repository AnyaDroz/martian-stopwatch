import styles from "./BackButton.module.css";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <div className={styles.back}>
      <Link className={styles.backButton} to="/">
        <img src="./images/arrow.svg" alt="arrow" className={styles.arrow} />
        Back
      </Link>
    </div>
  );
};

export default BackButton;
