import SearchForm from "../SearchForm/SearchForm";
import "./SearchHeader.css";

const SearchHeader = () => {
  return (
    <section className="search-header">
      <h2 className="search-header__title">
        {"What's going on in the world?"}
      </h2>
      <h3 className="search-header__subtitle">
        {
          " Find the latest news on any topic and save them in your personal account."
        }
      </h3>
      <SearchForm />
    </section>
  );
};

export default SearchHeader;
