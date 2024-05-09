

import AdminNavBar from "../components/navbar/AdminNavbar";
import Stats from "../components/stats/Stats";
import Footer from "../components/footer/Footer";
import Projects from "../components/project/Projects";

const HomePage = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <AdminNavBar style={{ zIndex: 1 }} /> {/* Asegúrate de establecer un z-index para el SideBar */}
      <div>
        <Stats />
        <Projects />

      </div>
      <div >
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
