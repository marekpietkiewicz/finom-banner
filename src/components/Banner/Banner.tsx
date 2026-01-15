import type { FC } from "react";
import type { BannerProps } from "../../types";
import Button from "../Button";
import IconButton from "../IconButton";
import Link from "../Link";
import CheckList from "../CheckList";
import { t } from "../../i18n";
import checkIcon from "../../assets/check-solid.png";
import closeIcon from "../../assets/close.png";
import styles from "./Banner.module.css";

const Banner: FC<BannerProps> = ({
  title,
  description,
  checklistItems,
  primaryButtonText,
  secondaryLinkText,
  secondaryLinkHref,
  coinImageSrc,
  onClose,
  onPrimaryClick,
  className = "",
  testId,
}) => {
  const bannerClasses = [styles.banner, className].filter(Boolean).join(" ");

  return (
    <article className={bannerClasses} data-testid={testId} role="banner">
      <IconButton
        icon={closeIcon}
        ariaLabel={t.banner.closeButtonAriaLabel}
        onClick={onClose}
        className={styles.closeButton}
        testId={testId ? `${testId}-close` : undefined}
      />

      <h2 className={styles.title}>{title}</h2>

      <div className={styles.content}>
        <div className={styles.mainContent}>
          <p className={styles.description}>{description}</p>

          <div className={styles.checklistMobile}>
            <CheckList
              items={checklistItems}
              checkIcon={checkIcon}
              testId={testId ? `${testId}-checklist-mobile` : undefined}
            />
          </div>

          <div className={styles.actions}>
            <Button
              onClick={onPrimaryClick}
              testId={testId ? `${testId}-primary-btn` : undefined}
            >
              {primaryButtonText}
            </Button>
            <Link
              href={secondaryLinkHref}
              external
              testId={testId ? `${testId}-secondary-link` : undefined}
            >
              {secondaryLinkText}
            </Link>
          </div>
        </div>

        <div className={styles.sideContent}>
          <div className={styles.checklistDesktop}>
            <CheckList
              items={checklistItems}
              checkIcon={checkIcon}
              testId={testId ? `${testId}-checklist-desktop` : undefined}
            />
          </div>
          <div className={styles.imageContainer}>
            <img
              src={coinImageSrc}
              alt={t.banner.coinImageAlt}
              className={styles.coinImage}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Banner;
