import Card from "../Card/Card";
//import "./CardList.css";

const SavedNewsList = ({ isLoggedIn, articles, onArticleSavedClick }) => {
  console.log("cards list", articles);
  return (
    <section className="card-list">
      <h2 className="card-list__title">{"Search results"}</h2>
      <ul className="card-list__container">
        {articles.map((card, index) => (
          //console.log(card)
          //console.log(index)
          <Card
            key={index}
            card={card}
            isLoggedIn={isLoggedIn}
            onArticleSavedClick={onArticleSavedClick}
          />
        ))}
      </ul>
      <button className="card-list__button">{"Show more"}</button>
    </section>
  );
};

export default SavedNewsList;
