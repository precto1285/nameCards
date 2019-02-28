import React from 'react';

const Form = () => {

  return (
    <div className="container">
      <div className="card my-1">
        <div className="card-header py-2">
          <h2>Enter An Employee:</h2>
        </div>
        <form>
          <div className="card-body">
            <div className="form-group">
              <label for="nameInput">Name:</label>
              <input id="nameInput" type="text" class="form-control" />
            </div>
            <div className="form-group">
              <label for="titleInput">Title:</label>
              <input id="titleInput" type="text" class="form-control" />
            </div>
            <div className="form-group">
              <label for="departmentInput">Department:</label>
              <input id="departmentInput" type="text" class="form-control" />
            </div>
            <div className="form-group">
              <label for="officeInput">Office:</label>
              <input id="officeInput" type="text" className="form-control" />
            </div>
          </div>
          <div className="card-footer py-5">
            <button className="btn btn-danger form-control">Submit</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Form;