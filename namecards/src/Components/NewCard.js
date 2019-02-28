import React, { Component } from 'react';

class NewCard extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header text-center">
            <h2>New Person:</h2>
          </div>
          <div className="card-body">
            <p>Name: </p>
            <p>Title: </p>
            <p>Department: </p>
            <p>Office: </p>
          </div>
          <div className="card-footer"></div>
        </div>
      </div>
    )
  }
}

export default NewCard;