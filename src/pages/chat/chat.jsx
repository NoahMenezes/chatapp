import React from 'react';
import './chat.css';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import ChatBox from '../../components/ChatBox/ChatBox';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import LiquidEther from '../../components/LiquidEther/LiquidEther';

const Chat = () => {
  return (
    <div className="chat">
      {/* Animated Background */}
      <LiquidEther
        colors={['#5227FF', '#FF9FFC', '#B19EEF']}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />

      {/* Chat UI */}
      <div className="chat-container">
        <LeftSideBar />
        <ChatBox />
        <RightSideBar />
      </div>
    </div>
  );
};

export default Chat;
