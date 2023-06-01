import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function AdminDashboardPage() {
  return (
    <div>
      <div className="admin-dashboard">
        <h1>Admin Dashboard</h1>
        <div className="card">
          <h2>Employee Management</h2>
          <p>Manage employee records, add or remove employees.</p>
          <Link to='/directory'><button className="dashboard-button">Go to Employee Management</button></Link>
        </div>
        <div className="card">
          <h2>Reports</h2>
          <p>Generate and view reports on employee data.</p>
          <button className="dashboard-button">Go to Reports</button>
        </div>
        <div className="card">
          <h2>Settings</h2>
          <p>Configure system settings and preferences.</p>
          <button className="dashboard-button">Go to Settings</button>
        </div>
      </div>
    </div>
  )
}
