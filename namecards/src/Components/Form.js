import React from 'react';

const Form = () => {
  return (
    <div className="container my-5 py-5 bg-secondary">
      <h2>Enter An Employee:</h2>
      <hr />
      <form>
        <div className="form-group"><label for="nameInput">Name:</label><input id="nameInput" type="text" class="form-control"></input></div>
        <div className="form-group"><label for="titleInput">Title:</label><input id="titleInput" type="text" class="form-control"></input></div>
        <div className="form-group"><label for="departmentInput">Department:</label><input id="departmentInput" type="text" class="form-control"></input></div>
        <div className="form-group"><label for="officeInput">Office:</label><input id="officeInput" type="text" className="form-control"></input></div>
        <hr />
        <button className="btn btn-danger form-control">Submit</button>
      </form>
    </div>
  )
}

export default Form;