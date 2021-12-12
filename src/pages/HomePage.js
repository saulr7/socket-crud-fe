import React, { useContext, useEffect, useState } from 'react';
import BandAdd from '../components/BandAdd';
import BandList from '../components/BandList';
import { SocketContext } from '../context/SocketContext';


const HomePage = () => {
  const { online, socket } = useContext(SocketContext);
  const [bands, setBands] = useState([]);

  useEffect(() => {
    socket.on('current-bands', (bands) => {
      setBands(bands);
    });
    return socket.off('current-bands')
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
            <BandList data={bands || []}/>
          </div>
          <div className="col-4">
            <BandAdd />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
