import React from 'react';

const CardOne = (prop) => {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h3>Lead Developer</h3>
        </div>
        <div className="card-body">
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
