import type { FC } from "react";
import type { CheckListProps } from "../../types";
import CheckListItem from "../CheckListItem";
import styles from "./CheckList.module.css";

interface CheckListInternalProps extends CheckListProps {
  checkIcon: string;
}

const CheckList: FC<CheckListInternalProps> = ({
  items,
  checkIcon,
  className = "",
  testId,
}) => {
  const listClasses = [styles.checkList, className].filter(Boolean).join(" ");

  return (
    <ul className={listClasses} data-testid={testId}>
      {items.map((item, index) => (
        <CheckListItem
          key={`${item}-${index}`}
          text={item}
          checkIcon={checkIcon}
          testId={testId ? `${testId}-item-${index}` : undefined}
        />
      ))}
    </ul>
  );
};

export default CheckList;
