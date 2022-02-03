import initialCards from "../../utils/cards";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

const NewsCardList = () => {
  const listNewsCard = initialCards;
  console.log("cards", listNewsCard);
  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Search results</h2>
      <ul className="news-card-list__container">
        {listNewsCard.map((card) => (
          <NewsCard key={card["_id"]} card={card} />
        ))}
      </ul>
    </section>
  );
};

export default NewsCardList;
