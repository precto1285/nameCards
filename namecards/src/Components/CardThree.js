import React from 'react';

const CardThree = (prop) => {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h2>Card Three</h2>
        </div>
        <div className="card-body">
          <h3>Card Body</h3>
          <p>Stuff</p>
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
