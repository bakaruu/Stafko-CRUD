
import Footer from "../../components/footer/Footer";

import UserNavBar from "../../components/navbar/UserNavbar";
import ProjectProfileUser from "../../components/user/project-profile-user/ProjectProfileUser";

const ProjectProfilePage = () => {
    
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <UserNavBar style={{ zIndex: 1 }} /> {/* Asegúrate de establecer un z-index para el SideBar */}
      
      <div>
        <ProjectProfileUser />
      </div>
      <div >
        
        <Footer />
      </div>
    </div>
  );
};

export default ProjectProfilePage;
