import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SearchForm, Footer, Header } from "../components";

const LandingPage = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [validationError, setValidationError] = useState(false);

  const handleChange = (event) => {
    setUsername(event.target.value);
    if (event.target.value.trim() !== "") {
      setValidationError(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim() !== "") {
      history.push("/user/" + username.trim() + "/resume");
    } else {
      setValidationError(true);
    }
  };

  return (
    <>
      <Header />
      <div className="home-layout glass-container">
        <h1 className="home-logo">
          {t("title")}
        </h1>
        <p className="home-description">
          {t("description")}
        </p>

        <SearchForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          validationError={validationError}
        />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
