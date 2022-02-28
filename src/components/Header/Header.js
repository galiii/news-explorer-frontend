import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";
import NavMobile from "../Nav/NavMobile";

import SearchHeader from "../SearchHeader/SearchHeader";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import "./Header.css";

const Header = ({
  isLoggedIn,
  onLoginClick,
  toggleOpenMenu,
  isMenuOpen,
  onSearchNews,
  onLogout,
  onSavedNewsPage,
}) => {
  //console.log("the inner width", window.innerWidth);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const location = useLocation().pathname;

  const handleWindowSizeWidth = () => setInnerWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeWidth);
  });

  return (
    <header className={location === "/" ? "header" : "header__white"}>
      {innerWidth < 600 ? (
        <NavMobile
          isLoggedIn={isLoggedIn}
          onLoginClick={onLoginClick}
          toggleOpenMenu={toggleOpenMenu}
          isMenuOpen={isMenuOpen}
          onLogoutClick={onLogout}
          onSavedNewsPage={onSavedNewsPage}
        />
      ) : (
        <Nav
          isLoggedIn={isLoggedIn}
          onLoginClick={onLoginClick}
          onLogoutClick={onLogout}
          onSavedNewsPage={onSavedNewsPage}
        />
      )}

      {location === "/" && <SearchHeader onSearchNews={onSearchNews} />}
      {/*location === "/saved-news" && <SavedNewsHeader />*/}
    </header>
  );
};

export default Header;
