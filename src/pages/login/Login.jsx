import React from 'react';
import "./Login.css";
import assets from '../../assets/assets';
// Before: const login = () => ...
// After: Capitalize the component name
const Login = () => {
  return (
    <div className='login'>
        <img src={assets.logo_big}  alt="" className='logo' />
    </div>
  );
}

// Before: export default login;
// After: Export the capitalized component
export default Login;