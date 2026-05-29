import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import "./i18n";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Register service worker with callbacks for update events
serviceWorkerRegistration.register({
  onUpdate: (registration) => {
    const event = new CustomEvent("sw-update-available", { detail: registration });
    window.dispatchEvent(event);
  },
  onSuccess: () => {
    const event = new CustomEvent("sw-cached-offline");
    window.dispatchEvent(event);
  }
});

