import React from 'react';
import './RightSideBar.css';
import assets from '../../assets/assets';

const RightSideBar = () => {
  return (
    <div className="rs">
      <div className="rs-profile">
        <img src={assets.profile_img} alt="Profile" />
        <h3>Richard Stanford <img src={assets.green_dot} className='dot' alt="Online" /></h3>
        <p>Hey there I am Richard Stanford using chat app</p>
      </div>
      <hr />
      <div className="rs-media">
        <p>Media</p>
        <div>
          <img src={assets.pic1} alt="Media" />
          <img src={assets.pic2} alt="Media" />
          <img src={assets.pic3} alt="Media" />
          <img src={assets.pic4} alt="Media" />
          <img src={assets.pic1} alt="Media" />
          <img src={assets.pic2} alt="Media" />
        </div>
      </div>
      {/* Add the missing className here */}
      <button className="rs-button">Logout</button>
    </div>
  );
}

export default RightSideBar;