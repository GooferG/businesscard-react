import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Content.css';

const Content = (props) => {
  return (
    <div className="content-body">
      <div className="content-info">
        <h1>Luiz Meneghim</h1>
        <h3>Frontend Developer</h3>
        <small>luimeneghim@gmail.com</small>
      </div>
      <div className="btns">
        <button className="email btn">
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="http://luizmeneghim.com">Email Me</a>
        </button>
        <button className="linkedin btn">
          <FontAwesomeIcon icon={faLinkedin} />
          <a href="https://www.linkedin.com/in/lmeneghim/">LinkedIn</a>
        </button>
      </div>
      <div className="text">
        <h3 className="content-title">About</h3>
        <p className="content-text">
          Brazilian living in the heat of Arizona. Passionate about software
          engineering and anything related to technology.
        </p>
      </div>
      <div className="text">
        <h3 className="content-title">Interests</h3>
        <p className="content-text">
          Felt in love with programming this year and haven't looked back! I
          also love making music and filming silly skits. I also enjoy video
          games and anything pop culture related
        </p>
      </div>
    </div>
  );
};

export default Content;
