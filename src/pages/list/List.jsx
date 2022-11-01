import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";

const List = ({
  closeSdb,
  toggleSdb,
  openDrp,
  toggleDrp,
  openProf,
  toggleProf,
  pageName,
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
          <div className="table-header"></div>
          <div className="table-section">
            <Datatable />
          </div>
          <div className="table-pagination">
            <div class="chevs-left">
              <i class="bx bx-chevrons-left"></i>
            </div>
            <div class="chev-left">
              <i class="bx bx-chevron-left"></i>
            </div>
            <p>1 of 1</p>
            <div class="chev-right">
              <i class="bx bx-chevron-right"></i>
            </div>
            <div class="chevs-right">
              <i class="bx bx-chevrons-right"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default List;
