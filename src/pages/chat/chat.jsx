import React from 'react';
import './chat.css';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import ChatBox from '../../components/ChatBox/ChatBox';
import RightSideBar from '../../components/RightSideBar/RightSideBar';

// Before: const chat = () => ...
// After: Capitalize the component name
const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat-container">
    <LeftSideBar />
    <ChatBox />
    <RightSideBar />
      </div>
    </div>
  );
}

// Before: export default chat;
// After: Export the capitalized component
export default Chat;