import React, { useState } from 'react';
import './ProfileUpdate.css';
import assets from '../../assets/assets';

const ProfileUpdate = () => {

  const [image, setImage]=useState(false);

  return (
    // The main container now serves as the root element
    <div className="profile">
      <div className="profile-container">
        {/* Moved the image to the left side for a more balanced layout */}
        <div className="profile-image-section">
          <img className='profile-pic' src={image? URL.createObjectURL(image) :assets.logo_icon} alt="User Avatar" />
        </div>
        
        <form action="">
          <h3>Profile Details</h3>
          <label htmlFor="avatar">
            <img src={image? URL.createObjectURL(image) :assets.avatar_icon} alt="Upload" />
            Upload profile image
            {/* The actual file input is hidden for styling purposes */}
            <input onClick={(e)=>setImage(e.target.files)} type="file" id='avatar' accept='.png, .jpg, .jpeg' hidden />
          </label>
          <input type="text" placeholder='Your name' required />
          <textarea placeholder='Write profile bio...' rows="4" required></textarea>
          <button type='submit'>Save Changes</button>
        </form>
      </div>
    </div>
  );
}

export default ProfileUpdate;