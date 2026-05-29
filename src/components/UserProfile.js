import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { RepoCard, Footer } from "./index";
import { useTranslation } from "react-i18next";

const UserProfile = (props) => {
  const { t } = useTranslation();
  const { username, language } = props;
  const {
    name,
    bio,
    location,
    company,
    login,
    avatar_url,
    repositories,
    followers,
    following,
    public_repos,
  } = props.data;

  return (
    <>
      <div className="glass-container" style={{ position: "relative", marginBottom: "2rem" }}>
        <Link to="/" className="header-btn link--back" style={{ position: "absolute", top: "1.5rem", left: "1.5rem", textDecoration: "none" }}>
          <i className="fas fa-chevron-left"></i>
        </Link>
        
        <div className="profile-card" style={{ paddingTop: "2rem" }}>
          <div className="profile-avatar-wrapper">
            <img alt={`${login}'s avatar`} src={avatar_url} className="profile-avatar" />
          </div>
          
          <div className="profile-info">
            <h1 className="profile-name">{name || login}</h1>
            <a 
              href={`https://github.com/${login}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="profile-username"
            >
              <i className="fab fa-github"></i> @{login}
            </a>
            
            {bio && <p className="profile-bio">{bio}</p>}
            
            <div className="profile-meta-grid">
              {location && (
                <div className="profile-meta-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{location}</span>
                </div>
              )}
              {company && (
                <div className="profile-meta-item">
                  <i className="far fa-building"></i>
                  <span>{company}</span>
                </div>
              )}
            </div>

            {/* Stats Summary Grid */}
            <div className="stats-grid">
              <div className="stat-box">
                <div className="stat-value">{followers}</div>
                <div className="stat-label">{t("followers")}</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">{public_repos}</div>
                <div className="stat-label">{t("repositories")}</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">{following}</div>
                <div className="stat-label">{t("following")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="section-title">{t("featured_repos")}</h2>
      
      <div className="repos-grid">
        {repositories.length > 0 ? (
          repositories.map((repo, index) => (
            <RepoCard item={repo} key={index} language={language} />
          ))
        ) : (
          <div className="glass-container" style={{ textAlign: "center", width: "100%", padding: "2rem" }}>
            <i className="fas fa-info-circle" style={{ fontSize: "2rem", color: "var(--accent-color)", marginBottom: "1rem" }}></i>
            <p>{username} {t("no_repos")}</p>
          </div>
        )}
      </div>
      
      <Footer />
    </>
  );
};

UserProfile.propTypes = {
  data: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired,
  language: PropTypes.object.isRequired,
};

export default UserProfile;
