import Statistics from "../../components/statistics/Statistics";
import Navbar from "../../components/navbar/Navbar";
import Newsfeed from "../../components/newsfeed/Newsfeed";
import Sidebar from "../../components/sidebar/Sidebar";
import HomeTable from "../../components/homeTable/HomeTable";

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
      <section className="home">
        <div className="heading">
          <h1>Dashboard</h1>
        </div>
        <div className="box-group">
          <Newsfeed />
          <HomeTable />
          <Statistics />
        </div>
      </section>
    </div>
  );
};

export default Home;
