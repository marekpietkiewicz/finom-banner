import type { FC } from "react";
import type { LinkProps } from "../../types";
import styles from "./Link.module.css";

const Link: FC<LinkProps> = ({
  href,
  external = false,
  children,
  className = "",
  testId,
  ...props
}) => {
  const linkClasses = [styles.link, className].filter(Boolean).join(" ");

  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      className={linkClasses}
      data-testid={testId}
      {...externalProps}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
