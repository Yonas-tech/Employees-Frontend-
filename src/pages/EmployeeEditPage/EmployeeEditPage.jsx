import './style.css'
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

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      address: {
        ...prevEmployee.address,
        [name]: value
      }
    }));
  };

  return (
    <div className="form-container">
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
        <div>
          <label>Position:</label>
          <input
            type="text"
            name="position"
            value={employee.position}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={employee.department}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={employee.location}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={employee.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="Email"
            value={employee.Email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Is On Leave:</label>
          <input
            type="checkbox"
            name="isOnLeave"
            checked={employee.isOnLeave}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Image ID:</label>
          <input
            type="number"
            name="imageId"
            value={employee.imageId}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={employee.dob}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>SSN:</label>
          <input
            type="text"
            name="ssn"
            value={employee.ssn}
            onChange={handleChange}
          />
        </div>
        <h1>Address: </h1>

        <div>
          <label>Street:</label>
          <input
            type="text"
            name="street"
            value={employee.address.street}
            onChange={handleAddressChange}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={employee.address.city}
            onChange={handleAddressChange}
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={employee.address.state}
            onChange={handleAddressChange}
          />
        </div>
        <div>
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={employee.address.country}
            onChange={handleAddressChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
