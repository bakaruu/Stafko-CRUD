
import Footer from "../../components/footer/Footer";

import AdminNavBar from "../../components/navbar/AdminNavbar";
import ProjectProfile from "../../components/project-profile/ProjectProfile";

const ProjectProfilePage = () => {
    
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <AdminNavBar style={{ zIndex: 1 }} /> {/* Asegúrate de establecer un z-index para el SideBar */}
      
      <div>
        <ProjectProfile />
      </div>
      <div >
        
        <Footer />
      </div>
    </div>
  );
};

export default ProjectProfilePage;
