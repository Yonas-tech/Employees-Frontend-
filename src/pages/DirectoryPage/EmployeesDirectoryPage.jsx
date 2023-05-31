import React from 'react'
import './style.css'
import Employees from './components/Employess/Employees'
import Locations from './components/Locations/Locations'
import Departments from './components/Departments/Departments'
import { Link, Routes, Route } from 'react-router-dom'

export default function EmployeesDirectoryPage({employeesData, pexelsClient}) {

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
              <Route path='/employees_view' Component={Employees} employeesData={employeesData} pexelsClient={pexelsClient}/>
              <Route path='/departments' Component={Departments} employeesData={employeesData} pexelsClient={pexelsClient}/>
              <Route path='/location' Component={Locations} employeesData={employeesData} pexelsClient={pexelsClient}/>
            </Routes>
        </div>
      </div>
    </div>
  )
}
