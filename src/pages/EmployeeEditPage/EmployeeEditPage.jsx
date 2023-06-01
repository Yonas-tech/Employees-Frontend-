import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as employeesAPI from '../../utilities/employees-api';

export default function EmployeeEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    position: '',
    department: '',
    location: '',
    phone: '',
    Email: '',
    isOnLeave: false,
    imageId: 0,
    dob: new Date(),
    address: {
      street: '',
      city: '',
      state: '',
      country: ''
    },
    ssn: 0
  });

  useEffect(() => {
    async function fetchEmployee() {
      try {
        const employeeData = await employeesAPI.getEmployeeById(id);
        setEmployee(employeeData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await employeesAPI.updateEmployee(id, employee);
      navigate('/directory'); // Redirect to the directory page after updating
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        {/* Render form fields based on the employee object */}
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={handleChange}
          />
        </div>
        {/* Add more input fields for other employee properties */}
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
