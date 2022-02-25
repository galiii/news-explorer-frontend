import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";
import NavMobile from "../Nav/NavMobile";

import SearchHeader from "../SearchHeader/SearchHeader";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import "./Header.css";

const Header = ({
  isLoggedIn,
  handleLoginClick,
  toggleOpenMenu,
  isMenuOpen,
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
          handleLoginClick={handleLoginClick}
          toggleOpenMenu={toggleOpenMenu}
          isMenuOpen={isMenuOpen}
        />
      ) : (
        <Nav isLoggedIn={isLoggedIn} handleLoginClick={handleLoginClick} />
      )}

      {location === "/" && <SearchHeader />}
      {location === "/saved-news" && <SavedNewsHeader />}
    </header>
  );
};

export default Header;
