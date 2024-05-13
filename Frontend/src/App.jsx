import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import backgroundImage from './assets/Images/background.jpg';
import ProjectsPage from "./pages/ProjectsPage";
import UsersPage from "./pages/UsersPage";
import ClientsPage from "./pages/ClientsPage";
import ProfilePage from "./pages/ProfilePage";
import UserHomePage from "./pages/user/UserHomePage";
import { UserProvider } from "./components/staff/UserContext";
// import ProjectProfile from './ProjectProfile'; // Importa el componente de la página de perfil del proyecto



function App() {
  return (
    <UserProvider> {/* Envuelve todo tu contenido con UserProvider */}
      <div style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        backgroundAttachment: 'fixed' // Agregar fondo fijo
      }}>

        <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            {/* user */}
            <Route path="/userhome" element={<UserHomePage />} />
            {/* <Route path="/project/:id" component={ProjectProfile} /> */}
          
          </Routes>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;