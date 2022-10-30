import React from "react";

const Navbar = ({ toggleSdb }) => {
  return (
    <div className="nav-head">
      <div className="menu-toggle toggle">
        <i className="bx bx-menu icon" onClick={toggleSdb}></i>
      </div>
      <div className="right-side">
        <div className="dropdown">
          <div className="create">
            <button>
              <i className="bx bx-add-to-queue icon dropdown-btn"></i>
            </button>

            <ul>
              <li className="drop-link">
                <a href="./add-librarian.html">+ Bibliotekar</a>
              </li>
              <li className="drop-link">
                <a href="./add-student.html">+ Ucenik</a>
              </li>
              <li className="drop-link">
                <a href="./add-books.html">+ Knjiga</a>
              </li>
              <li className="drop-link">
                <a href="./add-author.html">+ Autor</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="profile">
          <div className="profile-img">
            <img className="img-btn" src="./img/profile-valentina.jpg" alt="" />
          </div>
          <ul className="profile-links">
            <li className="drop-link">
              <a href="./profile.html">
                <i className="bx bx-user icon"></i> Profile
              </a>
            </li>
            <li className="drop-link">
              <a href="../index.html">
                <i className="bx bx-log-out-circle icon"></i> Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
