import "./NewsCard.css";

const NewsCard = ({ card }) => {
  return (
    <li className="news-card">
      <img
        src={card["image"]}
        alt={card["title"]}
        className="news-card__image"
      />
      <button className="news-card__button news-card__button_type_bookmark"></button>
      <p className="news-card__button_type_keywords">{card["keyword"]}</p>
      <p className="news-card__date">{card["date"]}</p>
      <h2 className="news-card__title">{card["title"]}</h2>
      <p className="news-card__text">{card["text"]}</p>
      <p className="news-card__source">{card["source"]}</p>
    </li>
  );
};

export default NewsCard;
