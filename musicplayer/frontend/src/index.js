import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import CreateRoom from './CreateRoom';
import JoinRoom from './JoinRoom';
import Room from './Room';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/create-room" element={<CreateRoom />} />
      <Route path="/join-room" element={<JoinRoom />} />
      <Route path="/room/:code" element={<Room />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
