import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const NotFoundPage = (props) => {
  const { location, history } = props;
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push("/");
    }, 2500);
    return () => clearTimeout(timer);
  }, [history]);

  return (
    <div className="home-layout glass-container" style={{ marginTop: "6rem", padding: "3rem" }}>
      <i className="far fa-meh fa-4x" style={{ color: "var(--accent-color)", marginBottom: "1.5rem" }}></i>
      <h1 style={{ fontSize: "2rem", fontWeight: "800", marginBottom: "1rem" }}>
        {t("user_not_found")}
      </h1>
      <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: "1.6" }}>
        {location && location.state && location.state.error 
          ? `Error: ${location.state.error}` 
          : t("profile_error")}
      </p>
      <p style={{ color: "var(--accent-color)", fontSize: "0.9rem", marginTop: "2rem", fontWeight: "600" }}>
        {t("redirecting")}
      </p>
    </div>
  );
};

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default NotFoundPage;
