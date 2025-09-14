import React from "react";
import "./Login.css";
import assets from "../../assets/assets";
// Before: const login = () => ...
// After: Capitalize the component name
const Login = () => {
  return (
    <div className="login">
      <img src={assets.logo_big} alt="" className="logo" />
      <form action="" className="login-form">
        <h2>Sign up</h2>
        <input
          type="text"
          placeholder="username"
          className="form-input"
          required
        />
        <input
          type="email"
          placeholder="Email address"
          className="form-input"
        />
        <input type="password" placeholder="password" className="form-input" />
        <button type="submit">Sign up</button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy</p>
        </div>
        <div className="login-forgot">
          <p className="login-toggle">
            Already have an account <span>click here </span>
          </p>
        </div>
      </form>
    </div>
  );
};

// Before: export default login;
// After: Export the capitalized component
export default Login;
