import React, { useState, useEffect } from 'react'
import './style.css'
import Employees from './components/Employees/Employees'
import Locations from './components/Locations/Locations'
import Departments from './components/Departments/Departments'
import { Link, Routes, Route, useParams } from 'react-router-dom'

import * as employeesAPI from '../../utilities/employees-api'


export default function EmployeesDirectoryPage({ user, setUser, pexelsClient }) {

  // const [data, setData] = useState([])
  const [employees, setEmployees] = useState([])

  useEffect(function () {
    async function getEmployees() {
      const foundEmployees = await employeesAPI.getAll();
      setEmployees(foundEmployees)
      // console.log(foundEmployees)
    }
    getEmployees();
  }, []);


  const {view} = useParams();


  return (
    <div className='page-container'>
      <h1>Employees Directory Page</h1>
      <div className='flex-container'>
        <menu>
          <Link to='/employees_view'>Employees</Link>
          <Link to='/departments'>Grouped by Department</Link>
          <Link to='/location'>Grouped by Location</Link>
        </menu>
        <div className='view'>
          <Routes>
            <Route path='/employees_view' element= {<Employees employees={employees}
              pexelsClient={pexelsClient} />}/>
            <Route path='/departments' element= {<Departments employees={employees}
              pexelsClient={pexelsClient}/>}/>
            <Route path='/location' element= {<Locations employees={employees}
              pexelsClient={pexelsClient}/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}
