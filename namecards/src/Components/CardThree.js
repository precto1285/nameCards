import React from 'react';

const CardThree = (prop) => {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h3>Person:</h3>
        </div>
        <div className="card-body">
          <p>{prop.cThreeName}</p>
          <p>{prop.cThreeTitle}</p>
          <p>{prop.cThreeDepartment}</p>
          <p>{prop.cThreeOffice}</p>
        </div>
        <div className="card-footer"></div>
      </div>
    </div>
  );
}

export default CardThree;
