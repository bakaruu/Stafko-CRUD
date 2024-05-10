
import AdminNavBar from "../components/navbar/AdminNavbar";
import Footer from "../components/footer/Footer";
import CLientsTable from "../components/clients/ClientsTable";

const ClientsPage = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <AdminNavBar style={{ zIndex: 1 }} /> {/* Asegúrate de establecer un z-index para el SideBar */}
      <div>
        <CLientsTable/>
      </div>
      <div >
        <Footer />
      </div>
    </div>
  );
};

export default ClientsPage;
