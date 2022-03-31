import "./NotFound.css";
import notFoundIcon from "../../images/logos/card/not-found_v1.svg";

const NotFound = () => {
  return (
    <section className="not-found">
      <img className="not-found__image" src={notFoundIcon} alt={"Not Found"} />
      <h2 className="not-found__title">{"Nothing found"}</h2>
      <p className="not-found__text">
        {"Sorry, but nothing matched your search terms."}
      </p>
    </section>
  );
};

export default NotFound;
