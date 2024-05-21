
import UserNavBar from "../../components/navbar/UserNavbar";
import Footer from "../components/footer/Footer";
import ProjectTableUser from "../../components/user/project-table-user/ProjectTableUser";

const ProjectsPage = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <UserNavBar style={{ zIndex: 1 }} /> {/* Asegúrate de establecer un z-index para el SideBar */}
      
      <div>
        <ProjectTableUser />
      </div>
      <div >
        
        <Footer />
      </div>
    </div>
  );
};

export default ProjectsPage;
