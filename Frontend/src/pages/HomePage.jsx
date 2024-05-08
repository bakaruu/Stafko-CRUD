

import NavBar from "../components/navbar/Navbar";
import Stats from "../components/stats/Stats";
import Footer from "../components/footer/Footer";
import Projects from "../components/project/Projects";

const HomePage = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <NavBar style={{ zIndex: 1 }} /> {/* Asegúrate de establecer un z-index para el SideBar */}
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
