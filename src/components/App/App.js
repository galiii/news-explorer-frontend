import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom"; // importing Switch
import Header from "../Header/Header";
import NewsCardList from "../NewsCardList/NewsCardList";
import About from "../About/About";
import NotFound from "../NotFound/NotFound"
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
//import logo from '../logo.svg';
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);



  return (
    <div className="page__container">
      <Header isLoggedIn={isLoggedIn}/>
      <Switch >
        <Route exact path="/">
          <NewsCardList isLoggedIn={isLoggedIn}/>
          <About />
        </Route>
        <Route path="/saved-news">
        <SavedNewsHeader />
        <NewsCardList isLoggedIn={isLoggedIn}/>
        </Route>
        {/*<Route path="*">
          <NotFound />
  </Route>*/}
      </Switch >

      <Footer />
    </div>
  );
}

export default App;
