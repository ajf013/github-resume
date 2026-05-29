import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LandingPage, Resume } from "./pages";
import { NotFoundPage } from "./components";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });
  const [installPromptEvent, setInstallPromptEvent] = useState(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [swRegistration, setSwRegistration] = useState(null);
  const [showUpdateBanner, setShowUpdateBanner] = useState(false);

  // Apply theme attributes to document.body
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Listen to theme change requests from sub-components
  useEffect(() => {
    const handleThemeToggle = () => {
      setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };
    window.addEventListener("toggle-theme", handleThemeToggle);
    return () => window.removeEventListener("toggle-theme", handleThemeToggle);
  }, []);

  // Listen to PWA install and update events
  useEffect(() => {
    const handleInstallPrompt = (e) => {
      e.preventDefault();
      setInstallPromptEvent(e);
      setShowInstallBanner(true);
    };

    const handleSwUpdate = (e) => {
      setSwRegistration(e.detail);
      setShowUpdateBanner(true);
    };

    window.addEventListener("beforeinstallprompt", handleInstallPrompt);
    window.addEventListener("sw-update-available", handleSwUpdate);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleInstallPrompt);
      window.removeEventListener("sw-update-available", handleSwUpdate);
    };
  }, []);

  // Reload page when service worker controls change (post SKIP_WAITING)
  useEffect(() => {
    const handleControllerChange = () => {
      window.location.reload(true);
    };
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("controllerchange", handleControllerChange);
    }
    return () => {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.removeEventListener("controllerchange", handleControllerChange);
      }
    };
  }, []);

  const handleInstallClick = () => {
    if (!installPromptEvent) return;
    installPromptEvent.prompt();
    installPromptEvent.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      setInstallPromptEvent(null);
      setShowInstallBanner(false);
    });
  };

  const handleUpdateClick = () => {
    if (!swRegistration || !swRegistration.waiting) return;
    swRegistration.waiting.postMessage({ type: "SKIP_WAITING" });
    setShowUpdateBanner(false);
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div id="app">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/user/:username/resume" component={Resume} />
          <Route path="/404-not-found" component={NotFoundPage} />
          <Route component={NotFoundPage} />
        </Switch>

        {showInstallBanner && (
          <div className="toast-notification">
            <div className="toast-content">
              <div className="toast-title">{t("install_title")}</div>
              <div className="toast-msg">{t("install_text")}</div>
            </div>
            <div className="toast-actions">
              <button className="toast-btn toast-btn-primary" onClick={handleInstallClick}>{t("install_btn")}</button>
              <button className="toast-btn toast-btn-secondary" onClick={() => setShowInstallBanner(false)}>{t("dismiss_btn")}</button>
            </div>
          </div>
        )}

        {showUpdateBanner && (
          <div className="toast-notification">
            <div className="toast-content">
              <div className="toast-title">{t("update_title")}</div>
              <div className="toast-msg">{t("update_text")}</div>
            </div>
            <div className="toast-actions">
              <button className="toast-btn toast-btn-primary" onClick={handleUpdateClick}>{t("update_btn")}</button>
              <button className="toast-btn toast-btn-secondary" onClick={() => setShowUpdateBanner(false)}>{t("dismiss_btn")}</button>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
