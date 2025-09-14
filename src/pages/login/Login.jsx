import React, { useState } from 'react';

const Login = () => {
  const [currState, setCurrState] = useState("Sign up");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [message, setMessage] = useState(""); // For feedback messages

  // This function now handles both login and sign up states
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setMessage(""); // Clear previous messages

    if (!agreed) {
        setMessage("You must agree to the terms and policy.");
        return;
    }

    if (currState === "Sign up") {
      // In a real app, you would call your Firebase signup function here
      console.log("Creating account with:", { userName, email, password });
      setMessage(`Success! Account created for ${userName}.`);
    } else {
      // In a real app, you would call your Firebase login function here
      console.log("Logging in with:", { email, password });
      setMessage("Login successful! Welcome back.");
    }
  };

  return (
    <>
      {/* All CSS is now included directly in the component */}
      <style>{`
        /* --- Main Container --- */
        .login {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #0d0d21; /* Added background color */
          font-family: 'Inter', sans-serif;
        }

        .logo {
            height: 60px; /* Sizing for the SVG logo */
            width: auto;
            align-self: center;
            margin-bottom: -10px; /* Adjust spacing */
        }
        
        /* --- Form with "Glassmorphism" Effect --- */
        .login-form {
          background: rgba(30, 30, 50, 0.4);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          border-radius: 10px;
          width: clamp(300px, 90vw, 400px);
        }
        
        .login-form h2 {
          font-weight: 500;
          font-size: 2rem;
          text-align: center;
        }
        
        .form-input-group {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-input {
          padding: 12px 15px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 4px;
          background-color: rgba(0, 0, 0, 0.2);
          color: white;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        
        .form-input::placeholder {
          color: #ccc;
        }
        
        .form-input:focus {
          border-color: #077eff;
          box-shadow: 0 0 5px rgba(7, 126, 255, 0.5);
        }
        
        .login-form button {
          padding: 12px;
          background-color: #077eff;
          color: white;
          font-size: 16px;
          font-weight: bold;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        
        .login-form button:hover {
          background-color: #0056b3;
        }

        .form-message {
            color: #28a745; /* Green for success */
            text-align: center;
            font-size: 14px;
            min-height: 20px; /* Reserve space */
        }

        .form-message:not(:empty) {
           color: #dc3545; /* Red for errors */
        }
        
        .login-term {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #d3d3d3;
        }
        
        .login-term input[type="checkbox"] {
          accent-color: #077eff;
        }
        
        .login-toggle {
          font-size: 14px;
          color: #d3d3d3;
          text-align: center;
        }
        
        .login-toggle span {
          font-weight: 500;
          color: #077eff;
          cursor: pointer;
          text-decoration: none;
        }
        
        .login-toggle span:hover {
          text-decoration: underline;
        }
      `}</style>
      <div className="login">
        {/* The form now calls onSubmitHandler when submitted */}
        <form onSubmit={onSubmitHandler} className="login-form">
          {/* Placeholder SVG instead of an external image */}
          <svg className="logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#077eff', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor: '#8E2DE2', stopOpacity:1}} />
                </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#grad1)" />
            <path d="M 35 65 L 50 35 L 65 65 M 45 55 L 55 55" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h2>{currState}</h2>
          <div className="form-input-group">
            {currState === "Sign up" && (
              <input
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                type="text"
                placeholder="Username"
                className="form-input"
                required
              />
            )}
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email address"
              className="form-input"
              required
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              className="form-input"
              required
            />
          </div>
          <div className="form-message">{message}</div>
          <button type="submit">
            {currState === "Sign up" ? "Create an account" : "Login now"}
          </button>
          <div className="login-term">
            <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} required/>
            <p>Agree to the terms of use & privacy policy</p>
          </div>
          <div className="login-forgot">
            {currState === "Sign up" ? (
              <p className="login-toggle">
                Already have an account?{" "}
                <span onClick={() => {setCurrState("Login"); setMessage("");}}>Login here</span>
              </p>
            ) : (
              <p className="login-toggle">
                Create an account?{" "}
                <span onClick={() => {setCurrState("Sign up"); setMessage("");}}>Click here</span>
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
