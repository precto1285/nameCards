import React from 'react';
import person1 from './Images/person1.jpg';
import person2 from './Images/person2.jpg';
import person3 from './Images/person3.jpg';

const imageCarousel = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 my-5">
          <img src={person1} alt="p1" className="w-100" />
        </div>
        <div className="col-md-4 my-5">
          <img src={person2} alt="p1" className="w-100" />
        </div>
        <div className="col-md-4 my-5">
          <img src={person3} alt="p1" className="w-100" />
        </div>
      </div>
    </div>
  )
}

export default imageCarousel;