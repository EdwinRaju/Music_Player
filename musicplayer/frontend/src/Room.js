import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Room() {
  const { code } = useParams();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    axios.get(`/api/rooms/${code}`)
      .then(response => {
        setRoom(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the room data!", error);
      });
  }, [code]);

  if (!room) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Room Code: {room.code}</h3>
      <p>Host: {room.host}</p>
      <p>Guest Can Pause: {room.guest_can_pause.toString()}</p>
      <p>Votes to Skip: {room.votes_to_skip}</p>
    </div>
  );
}

export default Room;
