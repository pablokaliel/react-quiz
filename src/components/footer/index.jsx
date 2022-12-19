import { BsInstagram, BsGithub, BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import "./styles.css";

function Footer() {
  return (
    <footer className="footer">
      <ul className="social-icon">
        <li>
          <a href="https://www.instagram.com/pablokallyel/"
          rel="noopener noreferrer"
          target="_blank"
          >
            <BsInstagram />
          </a>
        </li>
        <li>
          <a href="https://github.com/pablokaliel"
          rel="noopener noreferrer"
          target="_blank"
          >
            <BsGithub />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/pablokallyel/"
          rel="noopener noreferrer"
          target="_blank"
          >
            <BsTwitter />
          </a>
        </li>
        <li>
          <a href="#"
          rel="https://github.com/pablokaliel"
          target="_blank"
          >
            <FaDiscord />
          </a>
        </li>
      </ul>
      <span className="copy">&copy;2022 ReactJS | All Rights Reserved</span>
    </footer>
  );
}

export default Footer;
