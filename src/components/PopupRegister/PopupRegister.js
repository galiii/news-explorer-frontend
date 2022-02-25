import { useState, useEffect } from "react";
import Popup from "../Popup/Popup";
import "./PopupRegister.css";
import { isEmpty, validateEmail } from "../../utils/utils";

const PopupRegister = ({ isOpen, onRedirect, onClose, onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidUsername, setIsValidUsername] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const myElem = document.getElementById("not-available");

  if (myElem !== null) {
    myElem.classList.add("not-available");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //only for checking
    console.log("email", email);
    if (email === "example@test.com") {
      myElem.classList.remove("not-available");
      myElem.classList.add(
        "form__input-error",
        "form__input-error_active",
        "register__not-available"
      );
      console.log(myElem);
      return;
    }
    onRegister({ email, password, username });
  };

  const handleValid = () =>
    setIsValid(validateEmail(email) && isEmpty(password) && isEmpty(username));

  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  const handleUsername = (event) => setUsername(event.target.value);

  const onBlurEmail = () => {
    setIsValidEmail(validateEmail(email));
    handleValid();
  };
  const onBlurPassword = () => {
    setIsValidPassword(isEmpty(password));
    handleValid();
  };
  const onBlurUsername = () => {
    setIsValidUsername(isEmpty(username));
    handleValid();
  };

  useEffect(() => {
    setEmail("");
    setPassword("");
    setUsername("");
    setIsValidEmail(true);
    setIsValidPassword(true);
    setIsValidUsername(true);
    setIsValid(false);
  }, [isOpen]);

  return (
    <Popup
      name="register"
      title="Sign Up"
      formName="register"
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
        className="form__input form__input_type_name"
        placeholder="Enter password"
        value={password || ""} //It's give me Error on the console of undefined
        required
        onChange={handlePassword}
        onBlur={onBlurPassword}
      />
      <span
        id="password-input-error"
        className={`form__input-error ${
          isValidPassword ? "" : "form__input-error_active"
        }`}
      >
        {"Invalid password"}
      </span>

      <label className="form__label">{"Username"}</label>
      <input
        type="text"
        name="user"
        id="username-input"
        className="form__input form__input_type_username"
        placeholder="Enter your username"
        value={username || ""} //It's give me Error on the console of undefined
        required
        onChange={handleUsername}
        onBlur={onBlurUsername}
      />
      <span
        id="username-input-error"
        className={`form__input-error ${
          isValidUsername ? "" : "form__input-error_active"
        }`}
      >
        {"Invalid Username"}
      </span>
      <span className="not-available" id="not-available">
        {"This email is not available"}
      </span>
    </Popup>
  );
};

export default PopupRegister;
