import Card from "../Card/Card";
//import "./CardList.css";

const SavedNewsList = ({ isLoggedIn, articles, onArticleSavedOrDeleteClick}) => {
  //console.log("cards list", articles);
  return (
    <section className="card-list">
      <ul className="card-list__container">
        {articles.map((card, index) => (
          <Card
            key={index}
            card={card}
            isLoggedIn={isLoggedIn}
            onArticleSavedOrDeleteClick={onArticleSavedOrDeleteClick}
          />
        ))}
      </ul>
    </section>
  );
};

export default SavedNewsList;
