import { useState, useEffect ,useCallback} from "react";
import { Route, Switch } from "react-router-dom"; // importing Switch
import Header from "../Header/Header";
import CardList from "../CardList/CardList";
import About from "../About/About";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Preloader from "../Preloader/Preloader";
//import logo from '../logo.svg';
import "./App.css";

import PopupLogin from "../PopupLogin/PopupLogin";
import PopupRegister from "../PopupRegister/PopupRegister";

function App() {
  //no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const closeAllPopups = useCallback(() => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  },[]);

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

  /*const handleRegisterClick = () => {
    setIsRegisterOpen(true);
  };*/
  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  const handleLoginSubmit = () => {
    setIsLoggedIn(true);
    setIsLoginOpen(false);
  }



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
      <Header isLoggedIn={isLoggedIn} handleLoginClick={handleLoginClick} />
      <Switch>
        <Route exact path="/">
          {/*<NotFound />
          <Preloader />*/}
          <CardList isLoggedIn={isLoggedIn} />
          <About />
        </Route>
        <Route path="/saved-news">
          {/*<NotFound />
          <Preloader />*/}
          <CardList isLoggedIn={isLoggedIn} />
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
      />
    </div>
  );
}

export default App;
