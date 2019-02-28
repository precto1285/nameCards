import React from 'react';

const Form = () => {

  return (
    <div className="container my-5 py-5 bg-secondary">
      <div className="card bg-secondary">
        <div className="card-header">
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
          <div className="card-footer">
            <button className="btn btn-danger form-control">Submit</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Form;