import React from 'react';

const CardTwo = (prop) => {

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h2>Card Two</h2>
        </div>
        <div className="card-body">
          <h3>Card Body</h3>
          <p>Stuff</p>
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
