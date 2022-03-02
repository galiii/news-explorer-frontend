import { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ onSearchNews }) => {
  const [searchWord, setSearchWord] = useState("");
  const handleSearchClick = (evt) => {
    evt.preventDefault();
    onSearchNews(searchWord);
  };

  return (
    <form className="search-form" onSubmit={handleSearchClick}>
      <input
        className="search-form__input"
        type="text"
        placeholder="search"
        onChange={(e) => setSearchWord(e.target.value)}
        value={searchWord}
      />
      <button className="search-form__button" type="submit">
        {"Search"}
      </button>
    </form>
  );
};

export default SearchForm;
