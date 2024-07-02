import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateRoom() {
  const [guestCanPause, setGuestCanPause] = useState(true);
  const [votesToSkip, setVotesToSkip] = useState(2);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/create-room', {
      guest_can_pause: guestCanPause,
      votes_to_skip: votesToSkip,
    })
    .then(response => {
      navigate.push(`/room/${response.data.code}`);
    })
    .catch(error => {
      console.error("There was an error creating the room!", error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Guest Can Pause:
        <input 
          type="checkbox" 
          checked={guestCanPause}
          onChange={(e) => setGuestCanPause(e.target.checked)}
        />
      </label>
      <br />
      <label>
        Votes Required to Skip:
        <input 
          type="number" 
          value={votesToSkip}
          onChange={(e) => setVotesToSkip(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Create Room</button>
    </form>
  );
}

export default CreateRoom;
