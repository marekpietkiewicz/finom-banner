import type {
  ReactNode,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from "react";

export interface BaseComponentProps {
  className?: string;
  testId?: string;
}

export interface ButtonProps
  extends BaseComponentProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "icon";
  children: ReactNode;
}

export interface LinkProps
  extends BaseComponentProps,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  external?: boolean;
  children: ReactNode;
}

export interface IconButtonProps
  extends BaseComponentProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  ariaLabel: string;
}

export interface CheckListItemProps extends BaseComponentProps {
  text: string;
}

export interface CheckListProps extends BaseComponentProps {
  items: string[];
}

export interface BannerProps extends BaseComponentProps {
  title: string;
  description: string;
  checklistItems: string[];
  primaryButtonText: string;
  secondaryLinkText: string;
  secondaryLinkHref: string;
  coinImageSrc: string;
  onClose: () => void;
  onPrimaryClick?: () => void;
}
