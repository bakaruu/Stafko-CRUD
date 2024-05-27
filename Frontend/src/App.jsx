import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import backgroundImage from './assets/Images/background.jpg';
import UserHomePage from "./pages/user/UserHomePage";
import { UserProvider } from "./components/staff/UserContext";
import ProjectProfilePage from "./pages/project/ProjectProfilePage";
import ProjectProfilePageUser from "./pages/user/ProjectProfilePageUser";

function App() {
  return (
    <UserProvider> {/* Envuelve todo tu contenido con UserProvider */}
      <div style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        backgroundAttachment: 'fixed', // Agregar fondo fijo
        overflowX: "auto", // Agregar overflow-x: auto para desplazamiento horizontal
        
      }}>

        <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
           <Route path="/project/:id" element={<ProjectProfilePage />} />
            {/* user */}
            <Route path="/userhome" element={<UserHomePage />} />
            <Route path="/userproject/:id" element={<ProjectProfilePageUser />} />
            
          </Routes>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;