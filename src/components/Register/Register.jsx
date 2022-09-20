import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { LoggingContext } from "../../store/LoggingContext";

const Register = () => {

  const { handleRegister } = useContext(LoggingContext)

  const navigate = useNavigate()

  const nameRef = useRef();
  const lastNameRef = useRef();
  const passNameRef = useRef();
  const passConfirmNameRef = useRef();

  const handleSubmit = (e) => {

    //validar que no está enviando nada

    
    e.preventDefault();
    handleRegister({
        nameRef: nameRef.current.value,
        lastNameRef: lastNameRef.current.value,
        passNameRef: passNameRef.current.value,
        passConfirmNameRef: passConfirmNameRef.current.value
    })
    navigate("/login")
  };

  return (
    <div className="form-container">
      <h3>Register</h3>
      <form className="form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" className="form-input" ref={nameRef} />
        <br />
        <label>Lastname</label>
        <input type="text" name="lastname" className="form-input" ref={lastNameRef} />
        <br />
        <label>password</label>
        <input type="password" name="password" className="form-input" ref={passNameRef} />
        <br />
        <label>confirm password</label>
        <input type="password" name="confirmPassword" className="form-input" ref={passConfirmNameRef} />
        <br />

        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
