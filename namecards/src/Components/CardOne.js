import React from 'react';

const CardOne = (prop) => {

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h2>Card One</h2>
        </div>
        <div className="card-body">
          <h3>Card Body</h3>
          <p>Stuff</p>
          <p>{prop.cOneName}</p>
          <p>{prop.cOneTitle}</p>
          <p>{prop.cOneDepartment}</p>
          <p>{prop.cOneOffice}</p>
        </div>
        <div className="card-footer">
        </div>
      </div>
    </div>
  );
}


export default CardOne;
