import "./SearchForm.css";

const SearchForm = () => {
  return (
      <form className="search-form">
        <input
          className="search-form__input"
          type="text"
          placeholder="search"
        />
        <button className="search-form__button">Search</button>
      </form>
  );
};

export default SearchForm;
