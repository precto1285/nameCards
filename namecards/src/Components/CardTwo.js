import React from 'react';
import Person2 from './Images/person2.jpg';

const CardTwo = (prop) => {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h3>Person:</h3>
        </div>
        <div className="card-body">
          <img src={Person2} alt="person2" width="200px" className="rounded-circle py-3" />
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
