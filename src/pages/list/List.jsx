import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import Button from "../../components/button/Button";
import Search from "../../components/search/Search";

const List = ({
  closeSdb,
  toggleSdb,
  openDrp,
  toggleDrp,
  openProf,
  toggleProf,
  pageName,
  data,
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
          <h1>{pageName}</h1>
        </div>
        <div className="table">
          <div className="table-header">
            <Button pageName={pageName} />
            <Search />
          </div>
          <div className="table-section">
            <Datatable data={data} />
          </div>
          <div className="table-pagination">
            <div className="chevs-left">
              <i className="bx bx-chevrons-left"></i>
            </div>
            <div className="chev-left">
              <i className="bx bx-chevron-left"></i>
            </div>
            <p>1 of 1</p>
            <div className="chev-right">
              <i className="bx bx-chevron-right"></i>
            </div>
            <div className="chevs-right">
              <i className="bx bx-chevrons-right"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default List;
