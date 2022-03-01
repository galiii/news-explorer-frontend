import { useState, useEffect, useCallback } from "react";
import { Route, Switch, useHistory } from "react-router-dom"; // importing Switch
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import PopupLogin from "../PopupLogin/PopupLogin";
import PopupRegister from "../PopupRegister/PopupRegister";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as newsApi from "../../utils/NewsApi";
import mainApi from "../../utils/MainApi";
import "./App.css";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import SavedNewsList from "../SavedNewsList/SavedNewsList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
function App() {
  //Auth
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pageSavedLoggedIn, setPageSavedLoggedIn] = useState(false);
  //Popup Auth
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [errorMessageRegister, setErrorMessageRegister] = useState("");
  const [isErrorMessage, setIsErrorMessage] = useState(false);
  //Headers nav mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //Search
  const [isNotFound, setIsNotFound] = useState(false);
  const [isPreloader, setIsPreloader] = useState(false);
  const [isSearchOn, setIsSearchOn] = useState(false);
  const [keyWord, setKeyWord] = useState("");
  //
  const [articles, setArticles] = useState(
    JSON.parse(localStorage.getItem("search-result") || "[]")
  );
  const [savedArticles, setSavedArticles] = useState([]);

  const [currentUser, setCurrentUser] = useState({});

  const [token, setToken] = useState(localStorage.getItem("jwt"));
  const history = useHistory();

  useEffect(() => {
    //console.log("token", token);
    if (token) {
      mainApi
        .getContent(token)
        .then((res) => {
          setIsLoggedIn(true);
          //console.log("data user token", res.data);
          setCurrentUser(res.data);
        })
        .catch(console.err);
    } else {
      setIsLoggedIn(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      mainApi
        .getUserArticles(token)
        .then((res) => {
          res.data.map((article) => (article.saved = "true"));
          setSavedArticles([...res.data]);
          console.log("data user cards", savedArticles);
        })
        .catch(console.error);
    } else {
      setSavedArticles([]);
    }
  }, [token]);

  const toggleOpenMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSavedArticlesPage = () => {
    setPageSavedLoggedIn(true);
  };

  const closeAllPopups = useCallback(() => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
    setIsInfoTooltipOpen(false);
    setIsErrorMessage(false);
  }, []);

  const redirectToLogin = (resetForm) => {
    //console.log("redirect to Login");
    closeAllPopups();
    
    setIsLoginOpen(true);
    resetForm();
    
  };

  const redirectToRegister = (resetForm) => {
    //console.log("redirect to Register");
    closeAllPopups();
    setIsRegisterOpen(true);
    resetForm();
  };

  const handleLogin = ({ email, password }, resetForm) => {
    resetForm();
    console.log("hello");
    mainApi
      .login({ email, password })
      .then((res) => {
        if (res.token) {
          closeAllPopups();
          setToken(res.token);
          setIsLoggedIn(true);
          resetForm();
          history.push("/");
        } else {
          console.log("login", res.token);
        }
      })
      .catch(console.error);
  };

  const handleLoginClick = () => {
    setIsLoginOpen(true);
    setIsMenuOpen(false);
  };

  const handleRegister = ({ email, password, username }, resetForm) => {
    mainApi
      .register({ email, password, username })
      .then((data) => {
        console.log("in signup", data);
        closeAllPopups();
        setIsInfoTooltipOpen(true);
        resetForm();
        setIsErrorMessage(false);
      })
      .catch((err) => {
        console.log("line 131 App", err);
        if (err === "Conflict") {
          setIsErrorMessage(true);
        }
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);

    //setArticles([]);
    setIsSearchOn(false);
    history.push("/");
  };

  const handleSearchNewsResult = (searchWord) => {
    setIsPreloader(true);
    setIsNotFound(false);
    setIsSearchOn(false);
    setKeyWord(searchWord);
    newsApi
      .getArticles(searchWord)
      .then((articlesData) => {
        //console.log("should check if in production mode there is totalResult",articlesData);
        setIsPreloader(false);
        if (articlesData.totalResults > 0) {
          setArticles(articlesData.articles);
          localStorage.setItem(
            "search-result",
            JSON.stringify(articlesData.articles)
          );

          articlesData.articles.map((article) => (article.saved = "false"));
          console.log("save article", savedArticles);
          //const save = savedArticles.filter((c) => c.saved === "true");
          //console.log("save", save);
          for (let i = 0; i < articlesData.articles.length; i++) {
            const save = savedArticles.find(
              (c) => c.title === articlesData.articles[i].title
            );
            if (save) {
              articlesData.articles[i].saved = "true";
            }
          }
          console.log(articlesData.articles);
          setIsSearchOn(true);
        } else {
          setIsNotFound(true);
        }
      })
      .catch((err) => {
        //need to have a message error and represent in no found
        console.log("handleSearchNewsResult", err);
        setIsPreloader(false);
        setIsSearchOn(false);
      });
  };

  const handleArticleDelete = (card) => {
    mainApi
      .deleteArticle(card._id, token)
      .then((res) => {
        setSavedArticles((state) => state.filter((c) => c._id !== card._id));
        setArticles((state) =>
          state.map((c) =>
            c.title === card.title ? { ...c, saved: "false" } : c
          )
        );
      })
      .catch(console.error);
  };

  const handleArticleSave = (card) => {
    if (isLoggedIn === false) {
      setIsLoginOpen(true);
      console.log("should login");
      return;
    }
    console.log("card owner", card.owner);
    if (card.owner === currentUser._id || card.saved === "true") {
      if (card.saved === "true") {
        const find = savedArticles.find((c) => c.title === card.title);
        console.log("find ", find);
        handleArticleDelete(find);
      } else {
        handleArticleDelete(card);
      }
    } else {
      mainApi
        .saveArticle(token, card, keyWord)
        .then((newCard) => {
          //console.log("In App Card save:: ", articles[0]);
          setSavedArticles([...savedArticles, newCard.data]);
          setArticles((state) =>
            state.map((c) =>
              c.title === card.title ? { ...c, saved: "true" } : c
            )
          );
        })
        .catch(console.error);
    }
  };

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    };
    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, [closeAllPopups]);

  return (
    <div className="page__container">
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          isLoggedIn={isLoggedIn}
          onLoginClick={handleLoginClick}
          toggleOpenMenu={toggleOpenMenu}
          isMenuOpen={isMenuOpen}
          onSearchNews={handleSearchNewsResult}
          onLogout={handleLogout}
          onSavedNewsPage={handleSavedArticlesPage}
        />
        <Switch>
          <Route exact path="/">
            <Main
              isLoggedIn={isLoggedIn}
              isNotFound={isNotFound}
              isPreloader={isPreloader}
              isSearchOn={isSearchOn}
              keyWord={keyWord}
              articles={articles}
              onArticleSavedOrDeleteClick={handleArticleSave}
            />
          </Route>
          <ProtectedRoute isLoggedIn={isLoggedIn} exact path="/saved-news">
            <SavedNewsHeader savedArticles={savedArticles} />
            <SavedNewsList
              isLoggedIn={isLoggedIn}
              isNotFind={isNotFound}
              isPreloader={isPreloader}
              isSearchOn={isSearchOn}
              keyWord={keyWord}
              articles={savedArticles}
              onArticleSavedOrDeleteClick={handleArticleDelete}
            />
          </ProtectedRoute>
          {/* <Route>
            {isLoggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
         </Route>*/}
        </Switch>

        <Footer />
        <PopupLogin
          isOpen={isLoginOpen}
          onRedirect={redirectToRegister}
          onClose={closeAllPopups}
          onLogin={handleLogin}
        />
        <PopupRegister
          isOpen={isRegisterOpen}
          onRedirect={redirectToLogin}
          onClose={closeAllPopups}
          onRegister={handleRegister}
          isErrorMessage={isErrorMessage}
        />
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onRedirect={redirectToLogin}
          onClose={closeAllPopups}
          message="Registration successfully completed!"
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
