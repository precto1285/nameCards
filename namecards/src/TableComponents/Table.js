import React, { Component } from 'react';
import PeopleTable from './PeopleTable';
import TableForm from './TableForm';


class TableComp extends Component {
  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 bg-primary text-white py-5"><TableForm /></div>
          <div className="col-lg-6 bg-warning py-5"><PeopleTable /></div>
        </div>
      </div>
    )
  }
}

export default TableComp;