import './App.css';
import { Routes, Route } from 'react-router-dom';
import { createClient } from 'pexels';
// import NavBar from './components/NavBar/NavBar';
import EmployeesDirectoryPage from './pages/DirectoryPage/EmployeesDirectoryPage';
import EmployeeEditPage from './pages/EmployeeEditPage/EmployeeEditPage';
import NewEmployeePage from './pages/NewEmployeePage/NewEmployeePage';
// require('dotenv').config()

function App() {

  // const pexelsClient = createClient(process.env.pexels_api_key);

  return (
    <main className="App">
      {/* <EmployeesDirectoryPage //user = {user}
          // pexelsClient={pexelsClient} 
          /> */}

      {/* <NavBar user={user} setUser={setUser} /> */}
      <Routes>
        <Route path="/directory" element={<EmployeesDirectoryPage //user = {user}
        // pexelsClient={pexelsClient} 
        />} />
        <Route path='/directory/new' element={<NewEmployeePage />} />
        <Route path="/directory/edit/:id" element={<EmployeeEditPage />} />
        <Route path="/directory/:view" element={<EmployeesDirectoryPage //user = {user}
        // pexelsClient={pexelsClient} 
        />} />
      </Routes>
    </main>

  );
}

export default App;
