import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function JoinRoom() {
  const [code, setCode] = useState('');
const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate.push(`/room/${code}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Room Code:
        <input 
          type="text" 
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Join Room</button>
    </form>
  );
}

export default JoinRoom;
