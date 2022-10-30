import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = ({ closeSdb, toggleSdb }) => {
  return (
    <div className="container">
      <Sidebar closeSdb={closeSdb} />
      <Navbar toggleSdb={toggleSdb} />
    </div>
  );
};

export default Home;
