import "./PopupForm.css";

function PopupForm({
  name,
  formName,
  buttonName,
  onSubmit,
  children,
  isValid,
}) {
  return (
    <form name={formName} action="#" className="form" onSubmit={onSubmit}>
      {children}

      <button
        type="submit"
        aria-label="Submit"
        className={`form__button form__button  form__button_${
          isValid ? "submit" : "disable "
        } `}
        disabled={!isValid}
      >
        {buttonName}
      </button>
    </form>
  );
}

export default PopupForm;
