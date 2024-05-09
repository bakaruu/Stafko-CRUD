
import AdminNavBar from "../components/navbar/AdminNavbar";
import Footer from "../components/footer/Footer";

const ProjectsPage = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <AdminNavBar style={{ zIndex: 1 }} /> {/* Asegúrate de establecer un z-index para el SideBar */}
      
      <div >
        
        <Footer />
      </div>
    </div>
  );
};

export default ProjectsPage;
