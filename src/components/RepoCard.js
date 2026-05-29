import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const RepoCard = (props) => {
  const { item, language } = props;
  const { t } = useTranslation();
  const hasLanguages = item.languages && Object.keys(item.languages).length > 0;

  return (
    <div className="repo-card">
      <div>
        <div className="repo-header">
          <a
            href={item.url}
            className="repo-name"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.name}
          </a>
          
          <span className="repo-stars">
            <i className="fas fa-star"></i> {item.stars}
          </span>
        </div>

        {item.description && (
          <p className="repo-description">{item.description}</p>
        )}
      </div>

      <div className="repo-footer">
        {hasLanguages ? (
          Object.keys(item.languages).map((lang, index) => {
            const color = language[lang] || "#8b949e";
            return (
              <span className="lang-badge" key={index}>
                <i className="fas fa-circle" style={{ color }}></i>
                {lang}
              </span>
            );
          })
        ) : (
          <span className="no-lang">
            <i className="fas fa-times-circle"></i>
            <span>{t("no_languages")}</span>
          </span>
        )}
      </div>
    </div>
  );
};

RepoCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    stars: PropTypes.number,
    languages: PropTypes.object,
    description: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  language: PropTypes.object.isRequired,
};

export default RepoCard;
