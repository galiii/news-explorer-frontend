import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = ({ isLoggedIn }) => {
  const location = useLocation().pathname;
  console.log("location", location);
  return (
    <header className={location === "/" ? "header" : "header__normal"}>
      {/* Nav */}
      <Navigation isLoggedIn={isLoggedIn}  />
      {/* Search */}
      {location === "/" && <SearchForm />}
    </header>
  );
};

export default Header;
