import Card from "../Card/Card";
//import "./CardList.css";

const SavedNewsList = ({ isLoggedIn, articles, onArticleSavedClick }) => {
  console.log("cards list", articles);
  return (
    <section className="card-list">
      <ul className="card-list__container">
        {articles.map((card, index) => (
          <Card
            key={index}
            card={card}
            isLoggedIn={isLoggedIn}
            onArticleSavedClick={onArticleSavedClick}
          />
        ))}
      </ul>
    </section>
  );
};

export default SavedNewsList;
