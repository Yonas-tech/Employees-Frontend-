

// This is the base path of the Express route we'll define
// const BASE_URL = 'http://localhost:3001/api/users';
const BASE_URL = 'https://employeesbend.onrender.com/api';

// export async function getAll() {
//   // /api/users/login
//   const res = await fetch(`${BASE_URL}/employees`, {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify([])
//   })
//   // Check if request was successful
//   if (res.ok) {
//     // res.json() will resolve to the JWT
//     return res.json();
//   } else {
//     throw new Error('Invalid Sign Up');
//   }
// }

async function getAll() {
    try {
      const response = await fetch(`${BASE_URL}/employees`)
      const employeesData = await response.json()
      console.log(employeesData)
      return employeesData

    } catch (error) {
      // Handle any errors that occurred during the request
      console.error('Error:', error)
    }
  }

  async function getEmployeeById(id) {
    try {
      const response = await fetch(`${BASE_URL}/employees/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch employee');
      }
      const employee = await response.json();
      return employee;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  async function updateEmployee(id, updatedData) {
    try {
      const response = await fetch(`${BASE_URL}/employees/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
      });
      if (!response.ok) {
        throw new Error('Failed to update employee');
      }
      const employee = await response.json();
      return employee;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }


  async function deleteEmployee(id) {
    try {
      const response = await fetch(`${BASE_URL}/employees/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify("")
      });
      if (!response.ok) {
        throw new Error(`Failed to delete employee ${id}`);
      }
      const deletedEmployee = await response.json();
      return deletedEmployee;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  async function createNewEmployee(employee) {

    try {
      const response = await fetch(`${BASE_URL}/employees`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee)
      });
      if (!response.ok) {
        throw new Error(`Failed to create employee ${employee.id}`);
      }
      const createdEmployee = await response.json();
      return createdEmployee;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  export { createNewEmployee, getAll, getEmployeeById, updateEmployee, deleteEmployee };
  