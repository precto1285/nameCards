import React from 'react';
import Person2 from './Images/person2.jpg';

const CardTwo = (prop) => {
  return (
    <div>
      <div className="card text-center">
        <div className="card-header">
          <h3>Person:</h3>
        </div>
        <div className="card-body">
          <img src={Person2} alt="person2" width="200px" className="rounded-circle py-3" />
          <p>Name: {prop.cTwoName}</p>
          <p>Title: {prop.cTwoTitle}</p>
          <p>Department: {prop.cTwoDepartment}</p>
          <p>Office: {prop.cTwoOffice}</p>
        </div>
        <div className="card-footer"></div>
      </div>
    </div>
  );
}


export default CardTwo;
