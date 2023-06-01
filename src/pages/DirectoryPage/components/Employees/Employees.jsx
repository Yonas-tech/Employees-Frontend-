import React from 'react';
import "./style.css"
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { deleteEmployee } from '../../../../utilities/employees-api';

function Employees({ employees }) {
  const navigate = useNavigate();

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleEditClick = (id) => {
    navigate(`/directory/edit/${id}`);
  };


  const handleAddEmployee = () => {
    navigate(`/directory/new`);
  };


  // DELETE with CONFIRMATION
  const handleDelete = (id) => {
    setSelectedEmployee(id);
    setShowConfirmation(true);
  };

  const confirmDelete = () => {
    deleteEmployee(selectedEmployee);
    setSelectedEmployee(null);
    setShowConfirmation(false);
  };

  const cancelDelete = () => {
    setSelectedEmployee(null);
    setShowConfirmation(false);
  };

  return (
    <div>
      <h2>Employees</h2>
      <div>
        <Link to={'/directory/new'} className="add-button">
          Add Employee
        </Link>
      </div>
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
              <td>{employee.Email}</td>
              <td>{employee.department}</td>
              <td>{employee.location}</td>
              <td>
                <button onClick={() => handleEditClick(employee._id)}>Edit</button>
                <button onClick={() => handleDelete(employee._id)} className='delete-button'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showConfirmation && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to delete this employee?</p>
          <div className="confirmation-actions">
            <button onClick={confirmDelete}>Yes</button>
            <button onClick={cancelDelete}>No</button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Employees;
