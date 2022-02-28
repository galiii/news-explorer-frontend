import React from "react";
import "./SavedNewsHeader.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SavedNewsHeader = ({ savedArticles }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const mySet2 = [...new Set([...savedArticles].map((e) => e.keyword))];
  //console.log(" transform a set into an Array =",[...mySet2]);
  
  return (
    <section className="saved-news-header">
      <p className="saved-news-header__save-article">{"Saved articles"}</p>
      <h2 className="saved-news-header__title">
        {`${currentUser.username}, you have ${
          savedArticles.length > 1 ? `${savedArticles.length} Saved articles` : 
          savedArticles.length === 1 ? "one saved article" : "zero saved article"
        }`}
      </h2>
      <span className="saved-news-header__keywords">{"By keywords:"} </span>
      <span className="saved-news-header__keywords-name">
        {
        mySet2.length > 3 ? 
        `${mySet2[0]}, ${mySet2[1]}, and ${ mySet2.length - 2} other`
        //: mySet2.length === 3 ? `${mySet2[0]}, ${mySet2[1]}, and 1 other`
        : `${mySet2.slice(0,mySet2.length)} `
        }
      </span>
    </section>
  );
};

export default SavedNewsHeader;
