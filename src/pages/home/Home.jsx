import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = ({
  closeSdb,
  toggleSdb,
  openDrp,
  toggleDrp,
  openProf,
  toggleProf,
}) => {
  return (
    <div className="container">
      <Sidebar closeSdb={closeSdb} />
      <Navbar
        toggleSdb={toggleSdb}
        openDrp={openDrp}
        toggleDrp={toggleDrp}
        openProf={openProf}
        toggleProf={toggleProf}
      />
    </div>
  );
};

export default Home;
