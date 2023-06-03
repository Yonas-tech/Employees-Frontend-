import React, { useState, useEffect } from 'react'
import './directory-global.css'
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
  function getView(view){
    try{
    if (view==='employees'){
      return <Employees employees={employees}/>
    }
    else if (view==='departments')
    {
      return <Departments employees={employees}/>
    }
    else if (view==='locations')
    {
      return <Locations employees={employees}/>
    }
    else{
      return <Employees employees={employees}/>
    }}
    catch (err) {
      return(
      <div>
        {err.message}
      </div>
      )
    }
  }

  return (
    <div className='page-container'>
      <h1>Employees Directory Page</h1>
      <div className='flex-container'>
        <menu className='menu'>
          <Link to='/'>Dashboard</Link>
          <Link to='/directory/employees'>Employees</Link>
          <Link to='/directory/departments'>Grouped by Department</Link>
          <Link to='/directory/locations'>Grouped by Location</Link>
        </menu>
        <div className='view'>
            {getView(view)}
        </div>
      </div>
    </div>
  )
}
