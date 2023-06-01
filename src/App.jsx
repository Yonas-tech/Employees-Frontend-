import './App.css';
import { Routes, Route } from 'react-router-dom';
import { createClient } from 'pexels';
// import NavBar from './components/NavBar/NavBar';
import EmployeesDirectoryPage from './pages/DirectoryPage/EmployeesDirectoryPage';
import EmployeeEditPage from './pages/EmployeeEditPage/EmployeeEditPage';
require('dotenv').config()

function App() {

  const pexelsClient = createClient(process.env.pexels_api_key);

  return (
    <main className="App">
      <EmployeesDirectoryPage //user = {user}
          pexelsClient={pexelsClient} />

      {/* <NavBar user={user} setUser={setUser} /> */}
      {/* <Routes>
        <Route path="/directory" element={<EmployeesDirectoryPage //user = {user}
          pexelsClient={pexelsClient} />}/>
        <Route path="/directory/by/:view" element={<EmployeesDirectoryPage //user = {user}
          pexelsClient={pexelsClient} />}/>
        <Route path="/directory/edit/:id" element={<EmployeeEditPage />} />
      </Routes> */}
    </main>

  );
}

export default App;
