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
  //no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //Search
  const [isNotFound, setIsNotFound] = useState(false);
  const [isPreloader, setIsPreloader] = useState(false);
  const [isSearchOn, setIsSearchOn] = useState(false);
  const [keyWord, setKeyWord] = useState("");
  //
  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  //auth
  const [currentUser, setCurrentUser] = useState({});
  const [userName, setUserName] = useState("");

  const [token, setToken] = useState(localStorage.getItem("jwt"));
  const history = useHistory();

  useEffect(() => {
    console.log("token", token);
    if (token) {
      mainApi
        .getContent(token)
        .then((res) => {
          setIsLoggedIn(true);
          console.log("data user token", res.data);
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
          setSavedArticles([...res.data]);
          console.log("data user cards", res);
          //setCurrentUser(res.data);
        })
        .catch(console.error);
    } else {
      setSavedArticles([]);
    }
  }, [token]);

  const handleSavedArticlesPage = () => {
    console.log("articles");
    mainApi
      .getUserArticles(token)
      .then((res) => console.log(res))
      .catch(console.error);
  };

  const closeAllPopups = useCallback(() => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
    setIsInfoTooltipOpen(false);
  }, []);

  const redirectToLogin = () => {
    console.log("redirect to Login");
    closeAllPopups();
    setIsLoginOpen(true);
    //resetForm();
  };

  const redirectToRegister = () => {
    console.log("redirect to Register");
    closeAllPopups();
    setIsRegisterOpen(true);
   // resetForm();
  };

  const handleRegisterClick = () => setIsRegisterOpen(true);

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
          //console.log("login app email", email);
        } else {
          console.log("login", res.token);
        }
      })
      .catch(console.error);
      //resetForm();
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
      })
      .catch((err) => {
        console.log("line 131 App", err);
      });
      //resetForm();
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setUserName("");
    setArticles([]);
    setIsSearchOn(false);
    history.push("/");
  };

  const toggleOpenMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearchNewsResult = (searchWord) => {
    setKeyWord(searchWord);
    setIsPreloader(true);
    setIsNotFound(false);
    setIsSearchOn(false);
    newsApi
      .getArticles(searchWord)
      .then((articlesData) => {
        setIsPreloader(false);
        if (articlesData.articles.length > 0) {
          setArticles();
          setArticles(articlesData.articles);
          console.log(articlesData);
          setIsSearchOn(true);
        } else {
          setIsNotFound(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsPreloader(true);
        setIsSearchOn(false);
      });
  };

  const handleArticleDelete = (card) => {
    console.log("article delete", card);
    mainApi
      .deleteArticle(card._id, token)
      .then((res) => {
        setSavedArticles((state) => state.filter((c) => c._id !== card._id));
        setArticles((state) =>
          state.map((c) =>
            c.title === card.title ? { ...c, saved: false } : c
          )
        );
      })
      .catch(console.error);
  };

  const handleArticleSave = (card) => {
    mainApi
      .saveArticle(token, card, keyWord)
      .then((newCard) => {
        console.log("In App Card Like:: ", newCard.data);
        setSavedArticles([...savedArticles, newCard.data]);
        setArticles((state) =>
          state.map((c) => (c.title === card.title ? { ...c, saved: true } : c))
        );
      })
      .catch(console.error);

    console.log("saves articles", articles);

    /*
    const isLiked = card.likes.some((i) => i === currentUser._id);
    console.log("isLiked in APP", isLiked);
    api
      .changeLikeCardStatus(card._id, !isLiked, token)
      .then((newCard) => {
        console.log("In App Card Like:: ", newCard.data);
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard.data : c))
        );
      })
      .catch(console.error);
      */
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
              onArticleSavedClick={handleArticleSave}
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
              onArticleSavedClick={handleArticleDelete}
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
