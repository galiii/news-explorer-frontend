import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Card.css";

const Card = ({ card, isLoggedIn, onArticleSavedClick }) => {
  const location = useLocation().pathname;
  const [isSaved, setIsSaved] = useState(false); //only for checking

  const handleClick = () => {
    if(location === "/"){
      setIsSaved(!isSaved);
    }
    onArticleSavedClick(card);
  };
  //console.log("test",card);
  return (
    <li className="card">
      <img
        src={location === "/" ? card.urlToImage : card.image}
        alt={card.title}
        className="card__image"
      />

      {location === "/saved-news" && (
        <>
          <button className="card__button card__button_type_delete" onClick={handleClick}></button>
          <span className="card__tooltip">{"Remove from saved"}</span>
          <span className="card__button_type_keywords">{card.keyword}</span>
        </>
      )}
      {location === "/" && isLoggedIn && (
        <button
          className={`card__button ${
            isSaved
              ? "card__button_type_save-bookmark"
              : "card__button_type_bookmark"
          }`}
          onClick={handleClick}
        ></button>
      )}

      {location === "/" && !isLoggedIn && (
        <>
          <button className="card__button card__button_type_bookmark"></button>
          <span className="card__tooltip">{"Sign in to save articles"}</span>
        </>
      )}

      <p className="card__date">
        {location === "/" ? card.publishedAt : card.date}
      </p>
      <h2 className="card__title">{card.title}</h2>
      <p className="card__text">
        {location === "/" ? card.description : card.text}
      </p>
      <p className="card__source">
        {location === "/" ? card.source.name : card.source}
      </p>
    </li>
  );
};

export default Card;
