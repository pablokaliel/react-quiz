import { BsInstagram, BsGithub, BsTwitter } from "react-icons/bs";
import { FaDiscord} from "react-icons/fa";
import "./styles.css";

function Footer() {
  return (
    <footer className="footer">
      <ul className="social-icon">
        <li>
          <a href="#">
            <BsInstagram />
          </a>
        </li>
        <li>
          <a href="#">
            <BsGithub />
          </a>
        </li>
        <li>
          <a href="#">
            <BsTwitter />
          </a>
        </li>
        <li>
          <a href="#">
            <FaDiscord />
          </a>
        </li>
      </ul>
      <span className="copy">&copy;2022 ReactJS | All Rights Reserved</span>
    </footer>
  );
}

export default Footer;
