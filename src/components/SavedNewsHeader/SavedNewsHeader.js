import "./SavedNewsHeader.css";

const SavedNewsHeader = () => {
  return (
    <section className="saved-news-header">
      <p className="saved-news-header__save-article">Saved articles</p>
      <h2 className="saved-news-header__title">Elise, you have 5 saved articles</h2>
      <span className="saved-news-header__keywords">By keywords: </span>
      <span className="saved-news-header__keywords-name">Nature, Yellowstone, and 2 other</span>
    </section>
  );
};

export default SavedNewsHeader;
