import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavMobile.css";
import menuWhite from "../../images/nav/menu_mobile_white.svg";
import menuBlack from "../../images/nav/menu_mobile.svg";
import closeMenuWhite from "../../images/nav/close.svg";
import closeMenuBlack from "../..//images/nav/close_black.svg";
import logoutWhite from "../../images/nav/logout_white.svg";
import logoutBlack from "../../images/nav/logout.svg";
import Icon from "../Icon/Icon";

const NavMobile = ({ isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation().pathname;
  const navBlack = location === "/saved-news" ? "nav-mobile__light" : "";
  const itemLight = location === "/saved-news" ? "nav-mobile__light_open " : ""
  const menuIcon = location === "/" ? menuWhite : menuBlack;
  const closeMenu = location === "/" ? closeMenuWhite : closeMenuBlack;
  const btnColor = location === "/saved-news" ? "nav-mobile__button_light" : "";

  const toggleOpenMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={`nav-mobile  ${isMenuOpen ? "nav-mobile_open" : ""}`}>
      <nav
        className={`nav-mobile__navigation ${navBlack} ${
          isMenuOpen ? "nav-mobile__navigation_open" : ""
        }`}
      >
        <div className={`nav-mobile__news-explorer`}>{"NewsExplorer"}</div>

        <button className="nav-mobile__button-icon" onClick={toggleOpenMenu}>
          <Icon url={isMenuOpen ? closeMenu : menuIcon} alt={"menu"} />
        </button>

        <ul
          className={`nav-mobile__list  ${navBlack} ${
            isMenuOpen ? "nav-mobile__list_open" : ""
          } ${itemLight}`}
        >
          <li className="nav-mobile__item-list ">
            <Link to="/" className={`nav-mobile__link ${itemLight}`}>
              {"Home"}
            </Link>
          </li>

          {isLoggedIn && (
            <li className="nav-mobile__item-list">
              <Link to="/saved-news" className={`nav-mobile__link ${itemLight}`}>
                {"Saved articles"}
              </Link>
            </li>
          )}

          {isLoggedIn ? (
            <li className={`nav-mobile__item-list `}>
              <button
                className={`nav-mobile__button nav-mobile__button_logout ${itemLight} ${btnColor}`}
              >
                {"Elise"}
                <Icon
                  url={location === "/" ? logoutWhite : logoutBlack}
                  src={"logout"}
                />
              </button>
            </li>
          ) : (
            <li className="nav-mobile__item-list">
              <button className={`nav-mobile__button ${navBlack} ${btnColor}`}>
                {"Sign in"}
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default NavMobile;
