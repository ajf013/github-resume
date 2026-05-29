import React, { useEffect, useState } from 'react';
import i18n from '../i18n';
import languages from '../constants/languages';

const Header = () => {
  const [languageCode, setLanguageCode] = useState('en');
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  const handleChangeLanguage = ({ target: { value } }) => {
    setLanguageCode(value);
    i18n.changeLanguage(value);
    if (window && window.localStorage) {
      window.localStorage.setItem('REACT_GITHUB_PROFILE_LANG', value);
    }
  };

  const handleToggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    window.dispatchEvent(new CustomEvent('toggle-theme'));
  };

  useEffect(() => {
    if (window && window.localStorage) {
      const lang = window.localStorage.getItem('REACT_GITHUB_PROFILE_LANG');
      setLanguageCode(lang || 'en');
      const savedTheme = window.localStorage.getItem('theme');
      if (savedTheme) {
        setTheme(savedTheme);
      }
    }
  }, []);

  useEffect(() => {
    i18n.changeLanguage(languageCode);
  }, [languageCode]);

  return (
    <header className="main-header">
      <div className="header-controls">
        <button 
          onClick={handleToggleTheme} 
          className="header-btn" 
          aria-label="Toggle Theme"
          title="Toggle Theme"
        >
          {theme === 'dark' ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
        </button>
      </div>

      <div className="select-wrapper">
        <select
          id="demo-simple-select-filled"
          value={languageCode}
          onChange={handleChangeLanguage}
          className="custom-select"
        >
          {languages.length > 0 &&
            languages.map((item, index) => (
              <option key={index.toString()} value={item.code}>
                {item.nativeName}
              </option>
            ))}
        </select>
        <span className="select-icon">
          <i className="fas fa-chevron-down"></i>
        </span>
      </div>
    </header>
  );
};

export default Header;
