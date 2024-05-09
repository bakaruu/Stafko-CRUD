
import AdminNavBar from "../components/navbar/AdminNavbar";
import Footer from "../components/footer/Footer";
import Team from "../components/staff/Team";

const UsersPage = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <AdminNavBar style={{ zIndex: 1 }} /> {/* Asegúrate de establecer un z-index para el SideBar */}
      <div>
        
        <Team />
      </div>
      <div >
        <Footer />
      </div>
    </div>
  );
};

export default UsersPage;
