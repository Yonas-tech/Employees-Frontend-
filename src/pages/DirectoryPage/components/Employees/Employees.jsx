import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

function Employees({ employees }) {
  const navigate = useNavigate();

  const handleEditClick = (id) => {
    navigate(`/directory/edit/${id}`);
  };

  return (
    <div>
      <h2>Employees</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            {/* <th>Photo</th> */}
            <th>Title</th>
            <th>Email Address</th>
            <th>Department</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.firstName + ' ' + employee.lastName}</td>
              {/* <td>{employee.photo}</td> */}
              <td>{employee.position}</td>
              <td>{employee.email}</td>
              <td>{employee.department}</td>
              <td>{employee.location}</td>
              {/* <td>
                <button onClick={() => handleEditClick(employee.id)}>Edit</button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;
