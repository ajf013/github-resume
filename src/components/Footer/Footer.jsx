import React from 'react';
import { Icon } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div data-aos="fade-up" className="footer_main">
            <div className="footer_Icons">
                <span className="footer_git"><a target="_blank" rel="noreferrer noopener" href="https://github.com/ajf013" aria-label="GitHub"><span style={{ display: 'none' }}>GitHub</span><Icon name="github" size="big" /></a></span>
                <span className="footer_link"><a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/ajf013-francis-cruz/" aria-label="LinkedIn"><span style={{ display: 'none' }}>LinkedIn</span><Icon name="linkedin" size="big" /></a></span>
                <span className="footer_insta"><a target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/fcruz_013/" aria-label="Instagram"><span style={{ display: 'none' }}>Instagram</span><Icon name="instagram" size="big" /></a></span>
                <span className="footer_wht"><a target="_blank" rel="noreferrer noopener" href="https://api.whatsapp.com/send?phone=916379649461" aria-label="WhatsApp"><span style={{ display: 'none' }}>WhatsApp</span><Icon name="whatsapp" size="big" /></a></span>
                <span className="footer_twi"><a target="_blank" rel="noreferrer noopener" href="https://x.com/Itsme_Ajf013" aria-label="X (formerly Twitter)"><span style={{ display: 'none' }}>X (formerly Twitter)</span><svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: '26px', height: '26px', fill: 'currentColor', verticalAlign: 'middle', marginTop: '-3px' }}><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg></a></span>
            </div>
            
            <div className="footer_star_text" style={{ textAlign: 'center', marginBottom: '15px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                {t("star_text")}
            </div>
            
            <div className="footer_content">
                <span>{t("copyright")} <Icon name="copyright" />{new Date().getFullYear()} <strong>Francis Cruz | MCT</strong></span>
            </div>
        </div>
    );
};

export default Footer;
