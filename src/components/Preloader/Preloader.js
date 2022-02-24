import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader">
      <i className="preloader__circle"></i>
      <span className="preloader__text">{"Searching for news..."}</span>
    </div>
  );
};

export default Preloader;
