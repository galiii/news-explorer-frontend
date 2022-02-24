import { useLocation } from "react-router-dom";
import CardList from "../CardList/CardList";
import About from "../About/About";

//import NotFound from "../NotFound/NotFound"; //for check
//import Preloader from "../Preloader/Preloader"; //for check

const Main = ({ isLoggedIn }) => {
  const location = useLocation().pathname;
  return (
    <main className="main">
      {/*for checking*/}
      {/*
            <NotFound />
            <Preloader />
            */}
      <CardList isLoggedIn={isLoggedIn} />
      {location === "/" && <About />}
    </main>
  );
};

export default Main;
