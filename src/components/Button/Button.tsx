import type { FC } from "react";
import type { ButtonProps } from "../../types";
import styles from "./Button.module.css";

const Button: FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  testId,
  ...props
}) => {
  const buttonClasses = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={buttonClasses} data-testid={testId} {...props}>
      {children}
    </button>
  );
};

export default Button;
