import React, { useEffect, useState } from 'react';
import BandAdd from './components/BandAdd';
import BandList from './components/BandList';

import io from 'socket.io-client';

const connectSocketServer = () => {
  const socket = io('http://localhost:3002/', { transports: ['websocket'] });
  return socket;
};

const App = () => {
  const [socket] = useState(connectSocketServer());

  const [online, setonline] = useState(false);

  useEffect(() => {
    setonline(socket.connected);
  }, [socket]);

  useEffect(() => {
    socket.on('connect', () => setonline(true));
  }, [socket]);

  useEffect(() => {
    socket.on('disconnect', () => setonline(false));
  }, [socket]);

  return (
    <div className="container">
      <div className="alert">
        <p>
          Service status:
          {online ? <span className="text-success">Online</span> : <span className="text-danger">Offline</span>}
        </p>

        <h1>Band Name</h1>
        <hr />

        <div className="row">
          <div className="col-8">
            <BandList />
          </div>
          <div className="col-4">
            <BandAdd />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
