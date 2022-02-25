import React from "react";
import PopupForm from "../PopupForm/PopupForm";
import "./Popup.css";

function Popup({
  name,
  title,
  formName,
  isOpen,
  onClose,
  onSubmit,
  children,
  onRedirect,
  isValid,
}) {
  const popupClassName = `popup popup_type_${name} ${
    isOpen ? "popup_open" : ""
  }`;

  return (
    <div className={popupClassName}>
      <div className="popup__container">
        <button
          type="button"
          aria-label="Close"
          className="popup__close-button"
          onClick={onClose}
        ></button>
        <h3 className="popup__title">{title}</h3>
        <PopupForm
          children={children}
          buttonName={title}
          formName={formName}
          onSubmit={onSubmit}
          onRedirect={onRedirect}
          isValid={isValid}
        />

        <div className="popup__redirect">
          <span className="popup__redirect-text">{"or "}</span>
          <button
            onClick={onRedirect}
            className="popup__redirect-button"
          >{`Sign ${name === "login" ? "up" : "in"}`}</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
