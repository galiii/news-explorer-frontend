import { Link } from "react-router-dom";
import fbPhoto from "../../images/logos/footer/fb.svg";
import githubPhoto from "../../images/logos/footer/github.svg";
import Icon from "../Icon/Icon";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        {"2021 Supersite, Powered by News API"}
      </p>
      <nav className="footer__menu  ">
        <ul className="footer__list-link">
          <li className="footer__list-item">
            <Link to="/" className="footer__link">
              Home
            </Link>
          </li>
          <li className="footer__list-item">
            <a
              href="https://practicum.yandex.com/"
              target="_blank"
              rel="noreferrer"
              className="link footer__link"
            >
              {"Practicum by Yandex"}
            </a>
          </li>
        </ul>
        <ul className="footer__list-link">
          <li className="footer__list-item">
            <a
              href="https://github.com/galiii/"
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              <Icon url={githubPhoto} alt={"github"} />
            </a>
          </li>
          <li className="footer__list-item">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              <Icon url={fbPhoto} alt={"facebook"} />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
