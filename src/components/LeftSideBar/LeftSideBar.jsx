import React, { useState } from 'react'; // Import useState
import './LeftSideBar.css';
import assets from '../../assets/assets';

const LeftSideBar = () => {
  // State to manage sub-menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='ls'>
      <div className="ls-top">
        <div className="ls-nav">
          <img src={assets.logo} alt="ChatApp Logo" className='logo' />
          {/* Add onClick to toggle the menu */}
          <div className="menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={assets.menu_icon} alt="Menu" />
            {/* Conditionally add 'active' class to show the menu */}
            <div className={`sub-menu ${isMenuOpen ? 'active' : ''}`}>
              <p>Edit Profile</p>
              <hr />
              <p>Logout</p>
            </div>
          </div>
        </div>
        <div className="ls-search">
          <img src={assets.search_icon} alt="Search" />
          <input type="text" placeholder='Search here..' />
        </div>
      </div>

      <div className="ls-list">
        {Array(12).fill("").map((item, index) => (
          <div className="friends" key={index}>
            <img src={assets.profile_img} alt="Profile" />
            <div>
              <p>Richard Stanford</p>
              <span>Hello, how are you?</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftSideBar;