import "./SearchForm.css";

const SearchForm = () => {
  return (
    <section className="search-form">
      <h2 className="search-form__title">What's going on in the world?</h2>
      <h3 className="search-form__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </h3>
      <form className="search-form__form">
        <input
          className="search-form__input"
          type="text"
          placeholder="search"
        />
        <button className="search-form__button">Search</button>
      </form>
    </section>
  );
};

export default SearchForm;
