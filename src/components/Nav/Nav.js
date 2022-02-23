import { Link, useLocation } from "react-router-dom";
import "./Nav.css";
import logoutWhite from "../../images/nav/logout_white.svg";
import logoutBlack from "../../images/nav/logout.svg";
import Icon from "../Icon/Icon";

const Nav = ({ isLoggedIn, handleLoginClick }) => {
  const location = useLocation().pathname;
  const navBlack = location === "/saved-news" ? "nav__black" : "";
  const navLoginOrOut = isLoggedIn ? "logout" : "login";

  const activeLinkHome = location === "/" ? "nav__link_active-home" : "";
  const activeLinkNews =
    location === "/saved-news" ? "nav__link_active-news" : "";
  return (
    <div className={`nav ${navBlack}`}>
      <nav className="nav__container">
        <div className={`nav__news-explorer ${navBlack}`}>NewsExplorer</div>{" "}
        <ul className="nav__list">
          <li className="nav__item-list">
            <Link to="/" className={`nav__link  ${navBlack} ${activeLinkHome}`}>
              Home
            </Link>
          </li>
          {isLoggedIn && (
            <li className="nav__item-list">
              <Link
                to="/saved-news"
                className={`nav__link ${navBlack} ${activeLinkNews}`}
              >
                Saved articles
              </Link>
            </li>
          )}

          <li className="nav__item-list">
            <button
              className={`nav__button nav__${navLoginOrOut} ${navBlack}`}
              onClick={
                isLoggedIn ? handleLoginClick : handleLoginClick
              } /*for now in stage 3 i will fix its*/
            >
              {isLoggedIn ? (
                <span className="nav__username">{"Elise"}</span>
              ) : (
                "Sign in"
              )}
              {isLoggedIn && (
                <Icon
                  url={location === "/" ? logoutWhite : logoutBlack}
                  src={"logout"}
                />
              )}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
