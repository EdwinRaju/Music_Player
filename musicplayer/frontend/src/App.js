import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Music Player</h1>
      <Link to="/create-room">Create Room</Link>
      <br />
      <Link to="/join-room">Join Room</Link>
    </div>
  );
}

export default App;
