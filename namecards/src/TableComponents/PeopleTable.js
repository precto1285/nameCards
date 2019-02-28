import React from 'react';

const PeopleTable = () => {
  return (
    <div className="text-dark">
      <h1 className="my-5">People Table</h1>
      <table className="table table-dark">
        <thead>
          <th scope="col">Name</th>
          <th scope="col">Title</th>
          <th scope="col">Department</th>
          <th scope="col">Office</th>
        </thead>
        <tr>
          <td>Philippe</td>
          <td>Lead Developer</td>
          <td>Production</td>
          <td>Carlsbad</td>
        </tr>
        <tr>
          <td>Paul</td>
          <td>Chief UX Designer</td>
          <td>Design</td>
          <td>Richmond</td>
        </tr>
        <tr>
          <td>Wendy</td>
          <td>Database Manager</td>
          <td>Database Management</td>
          <td>San Jose</td>
        </tr>
      </table>
    </div>
  )
}

export default PeopleTable;