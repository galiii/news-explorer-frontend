import initialCards from "../../utils/cards";
import Card from "../Card/Card";
import "./CardList.css";

const CardList = ({ isLoggedIn }) => {
  const listNewsCard = initialCards;
  //console.log("cards", listNewsCard);
  return (
    <section className="card-list">
      <h2 className="card-list__title">{"Search results"}</h2>
      <ul className="card-list__container">
        {listNewsCard.map((card) => (
          <Card key={card["_id"]} card={card} isLoggedIn={isLoggedIn} />
        ))}
      </ul>
      <button className="card-list__button">{"Show more"}</button>
    </section>
  );
};

export default CardList;
