
import NavBar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const ClientsPage = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <NavBar style={{ zIndex: 1 }} /> {/* Asegúrate de establecer un z-index para el SideBar */}
      <div>
        
      </div>
      <div >
        <Footer />
      </div>
    </div>
  );
};

export default ClientsPage;
