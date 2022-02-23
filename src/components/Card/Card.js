import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Card.css";

const Card = ({ card, isLoggedIn }) => {
  const location = useLocation().pathname;
  const [isSaved, setIsSaved] = useState(false); //only for checking

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
  };

  return (
    <li className="card">
      <img src={card["image"]} alt={card["title"]} className="card__image" />

      {location === "/saved-news" && (
        <>
          <button className="card__button card__button_type_delete"></button>
          <span className="card__tooltip">{"Remove from saved"}</span>
          <span className="card__button_type_keywords">{card["keyword"]}</span>
        </>
      )}
      {location === "/" && isLoggedIn && (
        <button
          className={`card__button ${
            isSaved
              ? "card__button_type_save-bookmark"
              : "card__button_type_bookmark"
          }`}
          onClick={handleSaveClick}
        ></button>
      )}

      {location === "/" && !isLoggedIn && (
        <>
          <button className="card__button card__button_type_bookmark"></button>
          <span className="card__tooltip">{"Sign in to save articles"}</span>
        </>
      )}

      <p className="card__date">{card["date"]}</p>

      <h2 className="card__title">{card["title"]}</h2>
      <p className="card__text">{card["text"]}</p>

      <p className="card__source">{card["source"]}</p>
    </li>
  );
};

export default Card;
