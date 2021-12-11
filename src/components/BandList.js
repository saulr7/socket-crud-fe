import React from 'react';

const BandList = () => {
  const createRow = () => {
    return (
      <tr>
        <td>
          <button className="btn btn-primary">Vote</button>
        </td>
        <td></td>
        <td></td>
        <td>
          <button className="btn btn-danger">Vote</button>
        </td>
      </tr>
    );
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
