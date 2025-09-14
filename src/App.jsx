import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Add these imports at the top
import Login from './pages/login/login';
import Chat from './pages/chat/chat';
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate';

const App = () => {
  return (
    <div>
      <Routes>
        {/* This part was already correct! */}
        <Route path='/' element={<Login />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/profile' element={<ProfileUpdate />} />
      </Routes>
    </div>
  );
}

export default App;