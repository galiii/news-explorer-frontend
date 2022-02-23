import "./Icon.css";

const Icon = ({ url, alt }) => {
  return <img className="icon" src={url} alt={alt} />;
};

export default Icon;
