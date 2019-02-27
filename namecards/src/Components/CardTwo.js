import React from 'react';

const CardTwo = (prop) => {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h3>Chief UX Designer</h3>
        </div>
        <div className="card-body">
          <p>{prop.cTwoName}</p>
          <p>{prop.cTwoTitle}</p>
          <p>{prop.cTwoDepartment}</p>
          <p>{prop.cTwoOffice}</p>
        </div>
        <div className="card-footer"></div>
      </div>
    </div>
  );
}


export default CardTwo;
