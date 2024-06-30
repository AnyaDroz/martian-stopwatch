import clsx from "clsx";
import styles from "./Button.module.css";

type Props = {
  variant: "primary" | "secondary" | "tertiary";
  label: string;
  onClick?: () => void;
  disabled?: boolean;
};
const Button = ({ variant, label, onClick, disabled }: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        styles.button,
        { [styles.primary]: variant === "primary" },
        { [styles.secondary]: variant === "secondary" },
        { [styles.tertiary]: variant === "tertiary" },
      )}
    >
      {label}
    </button>
  );
};

export default Button;
