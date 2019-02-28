import React from 'react';
import Person3 from './Images/person3.jpg';

const CardThree = (prop) => {
  return (
    <div>
      <div className="card text-center">
        <div className="card-header">
          <h3>Person:</h3>
        </div>
        <div className="card-body">
          <img src={Person3} alt="person3" width="200px" className="rounded-circle py-3" />
          <p>Name: {prop.cThreeName}</p>
          <p>Title: {prop.cThreeTitle}</p>
          <p>Department: {prop.cThreeDepartment}</p>
          <p>Office: {prop.cThreeOffice}</p>
        </div>
        <div className="card-footer"></div>
      </div>
    </div>
  );
}

export default CardThree;
