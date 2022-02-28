import { useState, useEffect, useCallback  } from "react";
import Popup from "../Popup/Popup";
import { isEmpty, validateEmail } from "../../utils/utils";
import "./PopupLogin.css";

const PopupLogin = ({ isOpen, onRedirect, onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValid, setIsValid] = useState(false);

 

  const handleValid = () => setIsValid(validateEmail(email) && isEmpty(password));
  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    
    onLogin({ email, password });
  };

  const onBlurEmail = () => {
    setIsValidEmail(validateEmail(email));
    handleValid();
  };
  const onBlurPassword = () => {
    setIsValidPassword(isEmpty(password));
    handleValid();
  };

  const resetFields = () => {
    setIsValidEmail(true);
    setIsValidPassword(true);
    setIsValid(false);
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    resetFields();
  }, [isOpen]);

  return (
    <Popup
      name="login"
      title="Sign in"
      formName="login"
      buttonSubmitTitle="Save"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onRedirect={onRedirect}
      isValid={isValid}
    >
      <label className="form__label">{"Email"}</label>
      <input
        type="text"
        name="email"
        id="email-input"
        className="form__input form__input_type_email"
        placeholder="Enter email"
        value={email || ""} //It's give me Error on the console of undefined
        required
        onChange={handleEmail}
        onBlur={onBlurEmail}
      />
      <span
        id="email-input-error"
        className={`form__input-error ${
          isValidEmail ? "" : "form__input-error_active"
        }`}
      >
        {"Invalid email address"}
      </span>

      <label className="form__label">{"Password"}</label>
      <input
        type="password"
        name="password"
        id="password-input"
        className="form__input form__input_type_password login__password-input"
        placeholder="Enter password"
        value={password || ""} //It's give me Error on the console of undefined
        required
        onChange={handlePassword}
        onBlur={onBlurPassword}
      />
      <span
        id="password-input-error"
        className={`form__input-error login__password-error ${
          isValidPassword ? "" : "form__input-error_active"
        } login__password-error`}
      >
        {"Invalid password"}
      </span>
    </Popup>
  );
};

export default PopupLogin;
