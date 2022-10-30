import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleSdb, toggleDrp, openDrp, toggleProf, openProf }) => {
  return (
    <div className="nav-head">
      <div className="menu-toggle toggle">
        <i className="bx bx-menu icon" onClick={toggleSdb}></i>
      </div>
      <div className="right-side">
        <div className={openDrp ? "dropdown open" : "dropdown"}>
          <div className="create">
            <button onClick={toggleDrp}>
              <i className="bx bx-add-to-queue icon dropdown-btn"></i>
            </button>

            <ul>
              <li className="drop-link">
                <Link>+ Bibliotekar</Link>
              </li>
              <li className="drop-link">
                <Link>+ Ucenik</Link>
              </li>
              <li className="drop-link">
                <Link>+ Knjiga</Link>
              </li>
              <li className="drop-link">
                <Link>+ Autor</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={openProf ? "profile open" : "profile"}>
          <div className="profile-img" onClick={toggleProf}>
            <img className="img-btn" src="./img/profile-main.jpg" alt="" />
          </div>
          <ul className="profile-links">
            <li className="drop-link">
              <Link to="/">
                <i className="bx bx-user icon"></i> Profile
              </Link>
            </li>
            <li className="drop-link">
              <Link to="/">
                <i className="bx bx-log-out-circle icon"></i> Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
