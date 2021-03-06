import Popup from "../Popup/Popup";
import "./PopupRegister.css";
import { useFormWithValidation } from "../../hooks/formValidation";

const PopupRegister = ({
  isOpen,
  onRedirect,
  onClose,
  onRegister,
  isErrorMessage,
}) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  const { email, password, username } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    //only for checking
    console.log("email", email);
    onRegister({ email, password, username }, resetForm);
  };

  const handleRedirect = () => onRedirect(resetForm);

  return (
    <Popup
      name="register"
      title="Sign Up"
      formName="register"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onRedirect={handleRedirect}
      isValid={isValid}
      resetForm={resetForm}
      isErrorMessage={isErrorMessage}
    >
      <label className="form__label">{"Email"}</label>
      <input
        type="email"
        name="email"
        id="email-input-register"
        className="form__input form__input_type_email"
        placeholder="Enter email"
        value={email || ""} //It's give me Error on the console of undefined
        required
        onChange={(e) => handleChange(e)}
      />
      {errors.email && (
        <span id="email-input-error" className="form__input-error">
          {errors.email}
        </span>
      )}

      <label className="form__label">{"Password"}</label>
      <input
        type="password"
        name="password"
        id="password-input-register"
        className="form__input form__input_type_name"
        placeholder="Enter password"
        value={password || ""} //It's give me Error on the console of undefined
        required
        onChange={(e) => handleChange(e)}
        minLength={"3"}
      />
      {errors.password && (
        <span id="password-input-error" className="form__input-error">
          {errors.password}
        </span>
      )}

      <label className="form__label">{"Username"}</label>
      <input
        type="text"
        name="username"
        id="username-input-register"
        className="form__input form__input_type_name"
        placeholder="Enter your username"
        value={username || ""} //It's give me Error on the console of undefined
        required
        onChange={(e) => handleChange(e)}
        minLength={"3"}
      />
      {errors.username && (
        <span
          id="username-input-error"
          className={`form__input-error form__input-error_active`}
        >
          {errors.username}
        </span>
      )}
      {/*isErrorMessage && (
        <span className="not-available form__input-error form__input-error_active register__not-available">
          {"This email is not available"}
        </span>
      )*/}
    </Popup>
  );
};

export default PopupRegister;
