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
  const [articles, setArticles] = useState([]);
  //auth
  const [currentUser, setCurrentUser] = useState({});
  const [userName, setUserName] = useState("");

  const [token, setToken] = useState(localStorage.getItem("jwt"));
  const history = useHistory();

  const closeAllPopups = useCallback(() => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
    setIsInfoTooltipOpen(false);
  }, []);

  const redirectToLogin = () => {
    console.log("redirect to Login");
    closeAllPopups();
    setIsLoginOpen(true);
  };

  const redirectToRegister = () => {
    console.log("redirect to Register");
    closeAllPopups();
    setIsRegisterOpen(true);
  };

  const handleRegisterClick = () => setIsRegisterOpen(true);

  const handleLogin = ({ email, password }) => {
    console.log("hello")
    mainApi
      .login({ email, password })
      .then((res) => {
        if (res.token) {
          closeAllPopups();
          setToken(res.token);
          setIsLoggedIn(true);
          console.log("login app email", email);
        } else {
          console.log("login", res.token);
        }
      })
      .catch((err, status) => {
        console.log(err);
      });
  };

  const handleLoginClick = () => {
    setIsLoginOpen(true);
    setIsMenuOpen(false);
  };

  const handleRegister = ({ email, password, username }) => {
    mainApi
      .register({ email, password, username })
      .then((data) => {
        console.log("in sigup", data);
      })
      .catch((err) => {
        console.log("line 75 App", err);
      })
      .finally(() => setIsInfoTooltipOpen(true));
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setUserName("");
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
        handleLoginClick={handleLoginClick}
        toggleOpenMenu={toggleOpenMenu}
        isMenuOpen={isMenuOpen}
        onSearchNews={handleSearchNewsResult}
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
          />
        </Route>
        <Route path="/saved-news">
          <Main
            isLoggedIn={isLoggedIn}
            isNotFind={isNotFound}
            isPreloader={isPreloader}
            isSearchOn={isSearchOn}
            keyWord={keyWord}
            articles={articles}
          />
        </Route>
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
