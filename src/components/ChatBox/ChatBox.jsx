import React from 'react';
import './ChatBox.css';
import assets from '../../assets/assets';

const ChatBox = () => {
  return (
    <div className='chat-box'>
      <div className="chat-user">
        <img src={assets.profile_img} alt="User" />
        <p>Richard Stanford <img src={assets.green_dot} alt="Online" /></p>
        <img src={assets.help_icon} className='help' alt="Help" />
      </div>

      <div className="chat-msg">
        {/* Sent Message */}
        <div className="s-msg">
          <p className='msg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div>
            <img src={assets.profile_img} alt="Sender" />
            <p className='time'>2:30 PM</p>
          </div>
        </div>

        {/* Received Message */}
        <div className="r-msg">
           <div>
            <img src={assets.profile_img} alt="Receiver" />
            <p className='time'>2:31 PM</p>
          </div>
          <p className='msg'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </div>

        <div className="s-msg">
          <img className='msg-img' src={assets.pic1} alt="Sent" />
          <div>
            <img src={assets.profile_img} alt="Sender" />
            <p className='time'>2:32 PM</p>
          </div>
        </div>
      </div>

      <div className="chat-input">
        <input type="text" placeholder='Send a message' />
        <input type="file" id='image' accept='image/png, image/jpeg' hidden />
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="Upload" />
        </label>
        <img src={assets.send_button} alt="Send" />
      </div>
    </div>
  );
}

export default ChatBox;