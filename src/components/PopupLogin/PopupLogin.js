import Popup from "../Popup/Popup";
import "./PopupLogin.css";
import { useFormWithValidation } from "../../hooks/formValidation";

const PopupLogin = ({ isOpen, onRedirect, onClose, onLogin }) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  const { email, password } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password }, resetForm);
  };

  const handleRedirect = () => onRedirect(resetForm);

  return (
    <Popup
      name="login"
      title="Sign in"
      formName="login"
      buttonSubmitTitle="Save"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onRedirect={handleRedirect}
      isValid={isValid}
      resetForm={resetForm}
    >
      <label className="form__label">{"Email"}</label>
      <input
        type="email"
        name="email"
        id="email-input-login"
        className="form__input form__input_type_email"
        placeholder="Enter email"
        value={email || ""} //It's give me Error on the console of undefined
        required
        onChange={(e) => handleChange(e)}
      />
      {errors.email && (
        <span
          id="email-input-error"
          className={`form__input-error form__input-error_active`}
        >
          {errors.email}
        </span>
      )}

      <label className="form__label">{"Password"}</label>
      <input
        type="password"
        name="password"
        id="password-input-login"
        className="form__input form__input_type_password login__password-input"
        placeholder="Enter password"
        value={password || ""} //It's give me Error on the console of undefined
        required
        onChange={(e) => handleChange(e)}
        minLength={"3"}
      />
      {errors.password && (
        <span
          id="password-input-error"
          className={`form__input-error
          form__input-error_active login__password-error
         `}
        >
          {errors.password}
        </span>
      )}
    </Popup>
  );
};

export default PopupLogin;
