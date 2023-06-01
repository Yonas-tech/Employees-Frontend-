import React, { useEffect, useState } from 'react';

export default function Employees({ employees, pexelsClient }) {
  const [employeePhotos, setEmployeePhotos] = useState([]);

  useEffect(() => {
    if (employees) {
      fetchEmployeePhotos();
    }
  }, [employees]);

  async function fetchEmployeePhotos() {
    try {
      const photos = await Promise.all(
        employees.map((employee) =>
          pexelsClient.photos.show({ id: employee.imageId })
        )
      );
      setEmployeePhotos(photos);
    } catch (error) {
      console.error(error);
    }
  }

  return employees ? (
    <div>
      <h2>Employees</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Photo</th>
            <th>Title</th>
            <th>Email Address</th>
            <th>Department</th>
            <th>Location</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee, index) => {
            const photo = employeePhotos[index];
            return (
              <tr key={index}>
                <td>{employee.firstName + ' ' + employee.lastName}</td>
                <td className='photo-cell'>
                  {photo ? (
                    <img src={photo.src.small} alt="Employee Photo" />
                  ) : (
                    'Photo Loading...'
                  )}
                </td>
                <td>{employee.position}</td>
                <td>{employee.Email}</td>
                <td>{employee.department}</td>
                <td>{employee.location}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <div>
      <h3>Loading...</h3>
    </div>
  );
}
