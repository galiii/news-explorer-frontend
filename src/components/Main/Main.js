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
  onArticleSavedOrDeleteClick,
}) => {
  const location = useLocation().pathname;
  console.log("Search", isSearchOn && articles.length);
  return (
    <main className="main">
      {/*for checking*/}

      {isNotFound && <NotFound />}
      {isPreloader && <Preloader />}

      {articles.length && (
        <CardList
          isLoggedIn={isLoggedIn}
          articles={articles}
          onArticleSavedOrDeleteClick={onArticleSavedOrDeleteClick}
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
