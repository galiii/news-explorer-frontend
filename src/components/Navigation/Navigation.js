import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ isLoggedIn}) => {

  const location = useLocation().pathname;
  const navButton = `navigation__button  ${
    isLoggedIn ? "navigation__logout" : "navigation__login"
  }`;

  const navBlack = location === "/saved-news" ? "navigation__black" : "";
  return (
    <div className={`navigation ${navBlack}`}>
      <nav className="navigation__container">
        <div className={`navigation__news-explorer ${navBlack}`}>NewsExplorer</div>{" "}
        {/** Temporary  */}
        <ul className="navigation__list">
          <li className="navigation__item-list">
            <Link to="/" className={`navigation__link ${navBlack }`}>
              Home
            </Link>
          </li>
          {
            isLoggedIn && (
            <li className="navigation__item-list">
            <Link to="/saved-news" 
            className={`navigation__link ${navBlack }`}>
            Saved articles
            </Link>
          </li>
            ) 
          }
          
          <li className="navigation__item-list">
            <button className={`${navButton} ${navBlack}`}>
              {isLoggedIn ? "Elise" : "Sign in"}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
