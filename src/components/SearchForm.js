import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const SearchForm = (props) => {
  const { t } = useTranslation();

  return (
    <form onSubmit={props.handleSubmit} className="search-box-form">
      <div className="search-field-wrapper">
        <input
          id="username"
          type="text"
          onChange={props.handleChange}
          placeholder={t("placeholder")}
          className="search-input"
          autoComplete="off"
          autoFocus
        />
        <i className="fab fa-github"></i>
      </div>
      
      <button type="submit" className="search-btn">
        {t("generate")}
      </button>

      {props.validationError && (
        <div className="validation-error">
          <i className="fas fa-exclamation-circle"></i>
          <span>{t("required")}</span>
        </div>
      )}
    </form>
  );
};

SearchForm.propTypes = {
  validationError: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
