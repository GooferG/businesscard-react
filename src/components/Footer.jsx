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
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faLinkedin} />
      </footer>
    </div>
  );
};

export default Footer;
