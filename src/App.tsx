import { useState } from "react";
import { Banner } from "./components";
import coinImage from "./assets/coins-currency.png";
import "./App.css";

const BANNER_CONFIG = {
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
          Banner has been removed from DOM.
          <button className="reset-button" onClick={() => setIsVisible(true)}>
            Show Again
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
