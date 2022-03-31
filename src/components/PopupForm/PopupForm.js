import "./PopupForm.css";

function PopupForm({
  formName,
  buttonName,
  onSubmit,
  children,
  isValid,
  isErrorMessage,
}) {
  return (
    <form name={formName} action="#" className="form" onSubmit={onSubmit}>
      {children}

      {isErrorMessage && (
        <span className="form__input-error   form__input-error-submit">
          {"This email is not available"}
        </span>
      )}

      <button
        type="submit"
        aria-label="Submit"
        className={`form__button  form__button_${
          isValid ? "submit" : "disable "
        }
        ${isErrorMessage ? "form__button_submit-error" : ""}
        `}
        disabled={!isValid}
      >
        {buttonName}
      </button>
    </form>
  );
}

export default PopupForm;
