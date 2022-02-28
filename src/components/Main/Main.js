import { useLocation } from "react-router-dom";
import CardList from "../CardList/CardList";
import SavedNewsList from "../SavedNewsList/SavedNewsList";
import About from "../About/About";

import NotFound from "../NotFound/NotFound"; //for check
import Preloader from "../Preloader/Preloader"; //for check

const Main = ({
  isLoggedIn,
  isSearchOn,
  isPreloader,
  isNotFound,
  articles,
  onArticleSavedClick,
}) => {
  const location = useLocation().pathname;
  return (
    <main className="main">
      {/*for checking*/}

      {isNotFound && <NotFound />}
      {isPreloader && <Preloader />}

      {isSearchOn && (
        <CardList
          isLoggedIn={isLoggedIn}
          articles={articles}
          onArticleSavedClick={onArticleSavedClick}
        />
      )}
      {location === "/saved-news" && (
        <SavedNewsList isLoggedIn={isLoggedIn} articles={articles} />
      )}
      {location === "/" && <About />}
    </main>
  );
};

export default Main;
