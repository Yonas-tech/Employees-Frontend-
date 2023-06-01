import React, { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Employees from './components/Employees/Employees';
import Locations from './components/Locations/Locations';
import Departments from './components/Departments/Departments';
import * as employeesAPI from '../../utilities/employees-api';
import './directory-global.css';
// import './Employees/Employees.css';
// import './Departments/Departments.css';
// import './Locations/Locations.css';

export default function EmployeesDirectoryPage({ user, setUser, pexelsClient }) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function getEmployees() {
      try {
        const foundEmployees = await employeesAPI.getAll();
        setEmployees(foundEmployees);
      } catch (error) {
        console.error(error);
      }
    }
    getEmployees();
  }, []);

  return (
    <div className="page-container">
      <h1>Employees Directory Page</h1>
      <div className="flex-container">
        <menu className="menu">
          <Link to="./directory/employees">Employees</Link>
          <Link to="./directory/by/departments">Grouped by Department</Link>
          <Link to="./directory/by/location">Grouped by Location</Link>
        </menu>
        <div className="view">
          <Routes>
            <Route
              path="./directory/employees"
              element={<Employees employees={employees} pexelsClient={pexelsClient} />}
            />
            <Route
              path="./directory/by/departments"
              element={<Departments employees={employees} pexelsClient={pexelsClient} />}
            />
            <Route
              path="./directory/by/location"
              element={<Locations employees={employees} pexelsClient={pexelsClient} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
