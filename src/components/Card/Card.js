import { useLocation } from "react-router-dom";
import { formatDate } from "../../utils/utils";
import "./Card.css";

const Card = ({ card, isLoggedIn, onArticleSavedOrDeleteClick }) => {
  const location = useLocation().pathname;

  const handleClick = () => {
    onArticleSavedOrDeleteClick(card);
  };

  return (
    <li className="card">
      {location === "/saved-news" && (
        <>
          <button
            className="card__button card__button_type_delete"
            onClick={handleClick}
          ></button>
          <span className="card__tooltip">{"Remove from saved"}</span>
          <span className="card__button_type_keywords">{card.keyword}</span>
        </>
      )}
      {location === "/" && isLoggedIn && (
        <button
          className={`card__button ${
            card.saved === "true"
              ? "card__button_type_save-bookmark"
              : "card__button_type_bookmark"
          }`}
          onClick={handleClick}
        ></button>
      )}

      {location === "/" && !isLoggedIn && (
        <>
          <button
            className="card__button card__button_type_bookmark"
            onClick={handleClick}
          ></button>
          <span className="card__tooltip">{"Sign in to save articles"}</span>
        </>
      )}
      <a
        href={location === "/" ? card.url : card.link}
        className="card__description"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={location === "/" ? card.urlToImage : card.image}
          alt={card.title}
          className="card__image"
        />
        <p className="card__date">
          {location === "/"
            ? formatDate(card.publishedAt)
            : formatDate(card.date)}
        </p>
        <h2 className="card__title">{card.title}</h2>
        <p className="card__text">
          {location === "/" ? card.description : card.text}
        </p>
        <p className="card__source">
          {location === "/" ? card.source.name : card.source}
        </p>
      </a>
    </li>
  );
};

export default Card;
