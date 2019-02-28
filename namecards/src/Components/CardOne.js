import React from 'react';
import Person1 from './Images/person1.jpg';

const CardOne = (prop) => {
  return (
    <div>
      <div className="card text-center">
        <div className="card-header">
          <h3>Person:</h3>
        </div>
        <div className="card-body">
          <img src={Person1} alt="person1" width="200px" className="rounded-circle py-3" />
          <p>Name: {prop.cOneName}</p>
          <p>Title: {prop.cOneTitle}</p>
          <p>Department: {prop.cOneDepartment}</p>
          <p>Office: {prop.cOneOffice}</p>
        </div>
        <div className="card-footer">
        </div>
      </div>
    </div>
  );
}


export default CardOne;
