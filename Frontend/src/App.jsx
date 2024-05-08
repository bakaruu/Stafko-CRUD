import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import TaskPage from "./pages/TaskPage.jsx";
import TestSideBar from "./pages/TestSideBar.jsx";


//ODA1OGI4NjAtOWJkNC00ZDk5LWEzMTMtYTc4OWZmZDUyNDQz clockify api key
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<TaskPage/>} />
        <Route path="/users" element={<UserPage/>} />
        <Route path="/test" element={<TestSideBar/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
