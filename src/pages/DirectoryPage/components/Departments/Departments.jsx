import "./style.css"
import React, { useEffect, useState } from 'react';

function Departments({ employees }) {
  const [employeeGroups, setEmployeeGroups] = useState([]);

  useEffect(() => {
    if (employees) {
      const groups = groupEmployeesByDepartment();
      setEmployeeGroups(groups);
    }
  }, [employees]);

  function groupEmployeesByDepartment() {
    try {
      const result = employees.reduce((groups, employee) => {
        const department = employee.department;
        if (!groups[department]) {
          groups[department] = [];
        }
        groups[department].push(employee);
        return groups;
      }, {});
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  return (
    <div>
      <h2>Group by Departments</h2>
      {Object.entries(employeeGroups).map(([department, employees]) => (
        <div key={department}>
          <h3>{department}</h3>
          <table className="employee-table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Location</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee._id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.position}</td>
                  <td>{employee.location}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.Email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default Departments;
