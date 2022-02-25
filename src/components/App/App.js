import { useState, useEffect, useCallback } from "react";
import { Route, Switch } from "react-router-dom"; // importing Switch
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import PopupLogin from "../PopupLogin/PopupLogin";
import PopupRegister from "../PopupRegister/PopupRegister";
import "./App.css";

function App() {
  //no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSuccessRegOpen, setIsSuccessRegOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeAllPopups = useCallback(() => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
    setIsSuccessRegOpen(false);
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

  const handleLoginClick = () => {
    setIsLoginOpen(true);
    setIsMenuOpen(false);
  };

  /* just for the test will be Change*/
  const handleLoginSubmit = () => {
    closeAllPopups();
    setIsLoggedIn(true);
  };

  /* just for the test will be Change */
  const handleRegisterSubmit = () => {
    closeAllPopups();
    setIsSuccessRegOpen(true);
  };

  const toggleOpenMenu = () => setIsMenuOpen(!isMenuOpen);

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
      <Header
        isLoggedIn={isLoggedIn}
        handleLoginClick={handleLoginClick}
        toggleOpenMenu={toggleOpenMenu}
        isMenuOpen={isMenuOpen}
      />
      <Switch>
        <Route exact path="/">
          {/*<NotFound />
          <Preloader />*/}
          <Main isLoggedIn={isLoggedIn} />
        </Route>
        <Route path="/saved-news">
          {/*<NotFound />
          <Preloader />*/}
          <Main isLoggedIn={isLoggedIn} />
        </Route>
      </Switch>

      <Footer />
      <PopupLogin
        isOpen={isLoginOpen}
        onRedirect={redirectToRegister}
        onClose={closeAllPopups}
        onLogin={handleLoginSubmit}
      />
      <PopupRegister
        isOpen={isRegisterOpen}
        onRedirect={redirectToLogin}
        onClose={closeAllPopups}
        onRegister={handleRegisterSubmit}
      />
      <InfoTooltip
        isOpen={isSuccessRegOpen}
        onRedirect={redirectToLogin}
        onClose={closeAllPopups}
        message="Registration successfully completed!"
      />
    </div>
  );
}

export default App;