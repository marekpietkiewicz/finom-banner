import { useState } from "react";
import { Banner } from "./components";
import coinImage from "./assets/coins-currency.png";
import { t } from "./i18n";
import "./App.css";

const BANNER_CONFIG = {
  title: t.banner.title,
  description: t.banner.description,
  checklistItems: t.banner.checklistItems,
  primaryButtonText: t.banner.primaryButtonText,
  secondaryLinkText: t.banner.secondaryLinkText,
  secondaryLinkHref: "https://finom.co",
};

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleApply = () => {
    window.open("https://finom.co", "_blank", "noopener,noreferrer");
  };

  if (!isVisible) {
    return (
      <div className="app-container">
        <p className="banner-removed-text">
          {t.app.bannerRemovedText}
          <button className="reset-button" onClick={() => setIsVisible(true)}>
            {t.app.showAgainButton}
          </button>
        </p>
      </div>
    );
  }

  return (
    <div className="app-container">
      <Banner
        {...BANNER_CONFIG}
        coinImageSrc={coinImage}
        onClose={handleClose}
        onPrimaryClick={handleApply}
        testId="main-banner"
      />
    </div>
  );
}

export default App;
