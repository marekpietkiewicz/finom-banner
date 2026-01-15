import type { FC } from "react";
import type { IconButtonProps } from "../../types";
import styles from "./IconButton.module.css";

const IconButton: FC<IconButtonProps> = ({
  icon,
  ariaLabel,
  className = "",
  testId,
  ...props
}) => {
  const buttonClasses = [styles.iconButton, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={buttonClasses}
      aria-label={ariaLabel}
      data-testid={testId}
      type="button"
      {...props}
    >
      <img src={icon} alt="" aria-hidden="true" className={styles.icon} />
    </button>
  );
};

export default IconButton;
