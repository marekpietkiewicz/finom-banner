export interface Translations {
  banner: {
    title: string;
    description: string;
    checklistItems: string[];
    primaryButtonText: string;
    secondaryLinkText: string;
    closeButtonAriaLabel: string;
    coinImageAlt: string;
  };
  app: {
    bannerRemovedText: string;
    showAgainButton: string;
  };
}

const en: Translations = {
  banner: {
    title: "Get the Business Funding You Need",
    description:
      "Expand your business with a flexible loan tailored to your needs. Whether you're investing in new equipment, increasing inventory, or boosting cash flow, we offer quick approvals and competitive rates to keep your business growing.",
    checklistItems: [
      "Fast approval process",
      "Flexible repayment terms",
      "Competitive interest rates",
    ],
    primaryButtonText: "Apply Now",
    secondaryLinkText: "MORE INFORMATION",
    closeButtonAriaLabel: "Close banner",
    coinImageAlt: "Coins illustration",
  },
  app: {
    bannerRemovedText: "Banner has been removed from DOM.",
    showAgainButton: "Show Again",
  },
};

export const translations = {
  en,
};

export const defaultLanguage = "en";

export const t = translations[defaultLanguage];
