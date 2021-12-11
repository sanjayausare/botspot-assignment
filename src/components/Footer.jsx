import './Footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub,
    faDiscord,
    faYoutube,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    
    <footer>
    <div className="content">
      
      <div className="link-boxes">
        <div className="top">
          <p className="follow">Follow us</p>
          <div className="media-icons">
            <a className="social_logo" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
            <a className="social_logo" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
            <a className="social_logo" target="_blank"><FontAwesomeIcon icon={faDiscord} size="2x"/></a>
            <a className="social_logo" target="_blank"><FontAwesomeIcon icon={faYoutube} size="2x"/></a>
            <a className="social_logo" target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
          </div>
        </div>
       
        <div className="box input-box">
          <h3 className="company_name">XYZ</h3>
          <p className="company_add">(Apple Logistics and Supply Chain)<br/>
            A4, 10th Floor, Block-S, Kunal Apartment<br/>
            Ram Nagar, Delhi<br/>
            New Delhi - 110084, India.</p>
        </div>
      </div>
    </div>
    <div className="bottom-details">
      <div className="bottom_text">
        <span className="copyright_text">© 20010-2021. Apple Logistics and Supply Chain. All Rights Reserved.</span>
        <span className="policy_terms">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </span>
      </div>
    </div>
  </footer>
  );

}

export default Footer;