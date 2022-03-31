import { useState } from "react";
import Card from "../Card/Card";
import "./CardList.css";
const articlesPerPage = 3;

const CardList = ({ isLoggedIn, articles, onArticleSavedOrDeleteClick }) => {
  const [showMore, setShowMore] = useState(true);
  const [next, setNext] = useState(articlesPerPage);

  return (
    <section className="card-list">
      <h2 className="card-list__title">{"Search results"}</h2>
      <ul className="card-list__container">
        {articles.slice(0, next).map((card, index) => (
          <Card
            key={index}
            card={card}
            isLoggedIn={isLoggedIn}
            onArticleSavedOrDeleteClick={onArticleSavedOrDeleteClick}
          />
        ))}
      </ul>
      <button
        className={`card-list__button ${
          showMore ? "" : "card-list__button_hidden"
        }`}
        onClick={() =>
          articles.length > next
            ? setNext(next + articlesPerPage)
            : setShowMore(false)
        }
      >
        {"Show more"}
      </button>
    </section>
  );
};

export default CardList;
