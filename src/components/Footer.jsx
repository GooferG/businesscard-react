import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

const Footer = (props) => {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <a href="https://github.com/gooferG">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://instagram.com/luimeneghim">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/in/lmeneghim/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
