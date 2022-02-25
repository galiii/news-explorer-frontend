import "./InfoTooltip.css";

function InfoTooltip({ isOpen, onClose, message, onRedirect }) {
  const popupClassName = `popup info-tooltip ${isOpen ? "popup_open" : ""}`;

  return (
    <div className={popupClassName}>
      <div className="popup__container info-tooltip__container">
        <button
          type="button"
          aria-label="Close"
          className="popup__close-button"
          onClick={onClose}
        ></button>
        <h3 className="popup__title info-tooltip__text">{message}</h3>
        <div className="popup__redirect info-tooltip__redirect">
          <button onClick={onRedirect} className="popup__redirect-button ">
            {"Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;
