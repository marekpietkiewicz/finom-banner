import type { FC } from "react";
import type { CheckListItemProps } from "../../types";
import styles from "./CheckListItem.module.css";

interface CheckListItemInternalProps extends CheckListItemProps {
  checkIcon: string;
}

const CheckListItem: FC<CheckListItemInternalProps> = ({
  text,
  checkIcon,
  className = "",
  testId,
}) => {
  const itemClasses = [styles.checkListItem, className]
    .filter(Boolean)
    .join(" ");

  return (
    <li className={itemClasses} data-testid={testId}>
      <img
        src={checkIcon}
        alt=""
        aria-hidden="true"
        className={styles.checkIcon}
      />
      <span className={styles.text}>{text}</span>
    </li>
  );
};

export default CheckListItem;
