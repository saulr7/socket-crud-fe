import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../context/SocketContext';

const BandList = ({data = []}) => {

  const [bands, setBands] = useState([])
  const { socket } = useContext(SocketContext);


  useEffect(() => {
    setBands(data)
    
  }, [data])

  const vote = (id) => {
    socket.emit('vote-band', { id });
  };

  const deleteBand = (id) => {
    socket.emit('delete-band', { id });
  };

  const changeName = (id, name) => {
    socket.emit('change-name', { id, name });
  };

  const handleChangeName = (ev, id) => {
    const newName = ev.target.value

    setBands(bands => bands.map((band) => {
      if (band.id === id) {
        band.name = newName
      }

      return band
    }))

  }

  const onBlurHandler = (id, name) => {
    console.log(id, name)
    changeName(id, name)
  }

  const createRow = () => {
    return (
    bands?.map((band) => (

      <tr key={band.id}>
        <td>
          <button className="btn btn-primary" onClick={()=>vote(band.id)}>Vote</button>
        </td>
        <td>
          <input type="text" value={band.name} className='form-control'
          onChange={(ev)=> handleChangeName(ev, band.id)} onBlur={()=>onBlurHandler(band.id, band.name)}
            
          /> </td>
        <td> {band.votes} </td>
        <td>
          <button className="btn btn-danger" onClick={()=>deleteBand(band.id)}>Delete</button>
        </td>
      </tr>
    )))
  
  };
  return (
    <>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>Vote</th>
            <th>Name</th>
            <th>Votes</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{createRow()}</tbody>
      </table>
    </>
  );
};

export default BandList;
