
import Footer from "../../components/footer/Footer";
import UserNavBar from "../../components/navbar/UserNavbar";

const UserHomePage = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <UserNavBar style={{ zIndex: 1 }} /> {/* Asegúrate de establecer un z-index para el SideBar */}
      <div>
        

      </div>
      <div >
        <Footer />
      </div>
    </div>
  );
};

export default UserHomePage;
