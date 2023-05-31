import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { createClient } from 'pexels';
// import dotenv from 'dotenv';
import NavBar from './components/NavBar/NavBar';
import AdminDashboardPage from './pages/AdminDashboard/AdminDashboardPage';
import AuthPage from './pages/Auth/AuthPage';
import EmployeesDirectoryPage from './pages/DirectoryPage/EmployeesDirectoryPage';
import NewEmployeePage from './pages/NewEmployeePage/NewEmployeePage';
import NewUserPage from './pages/NewUserPage/NewUserPage';
import UserDashboardPage from './pages/UserDashboard/UserDashboardPage';
import UsersPage from './pages/UsersPage/UsersPage';
import UserEditPage from './pages/UserEditPage/UserEditPage';
import EmployeeEditPage from './pages/EmployeeEditPage/EmployeeEditPage';
import employeesData from './mock_data/mock_employees_data';
import './env'


// import { getUser } from './utilities/users-service';
// import { getAdmin } from './utilities/admin-service';


function App() {

  // const [user, setUser] = useState(getUser());
  // const [admin, setAdmin] = useState(getAdmin());

  const pexelsClient = createClient(window.env.pexels_api_key);

  const [employeesMockData, setData] = useState([])

  useEffect(()=>{
    console.log(employeesMockData[1])
  }, employeesMockData)
  
  useEffect(()=>{
    setData(employeesData)
  },[])

  
  return (
    <main className="App">
      <EmployeesDirectoryPage employeesData={employeesMockData} pexelsClient={pexelsClient}/>


      {/* {user ?
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/user-dashboard" element={<UserDashboardPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/edit" element={<UserEditPage />} />
            <Route path="/directory" element={<EmployeesDirectoryPage />} />
            <Route path="/directory/new" element={<NewEmployeePage />} />
          </Routes>
        </> 
        // :
        // admin ?
        // <>
        //   <NavBar user={user} setUser={setUser}/>
        //   <Routes>
        //     <Route path="/admin" element={<AdminDashboardPage />} />
        //     <Route path="/users" element={<UsersPage />} />
        //     <Route path="/users/new" element={<NewUserPage />} />
        //     <Route path="/users/edit" element={<UserEditPage />} />
        //     <Route path="/directory" element={<EmployeesDirectoryPage />} />
        //     <Route path="/directory/new" element={<NewEmployeePage />} />
        //     <Route path="/directory/edit" element={<EmployeeEditPage />} />

        //   </Routes>
        // </>
        :
        <AuthPage setUser={setUser}/>
       } */}
    </main>

  );
}

export default App;
