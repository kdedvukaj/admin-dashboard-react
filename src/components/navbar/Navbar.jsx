import React from "react";

const Navbar = () => {
  return (
    <div class="nav-head">
      <div class="menu-toggle toggle">
        <i class="bx bx-menu icon"></i>
      </div>
      <div class="right-side">
        <div class="dropdown">
          <div class="create">
            <button>
              <i class="bx bx-add-to-queue icon dropdown-btn"></i>
            </button>

            <ul>
              <li class="drop-link">
                <a href="./add-librarian.html">+ Bibliotekar</a>
              </li>
              <li class="drop-link">
                <a href="./add-student.html">+ Ucenik</a>
              </li>
              <li class="drop-link">
                <a href="./add-books.html">+ Knjiga</a>
              </li>
              <li class="drop-link">
                <a href="./add-author.html">+ Autor</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="profile">
          <div class="profile-img">
            <img class="img-btn" src="./img/profile-valentina.jpg" alt="" />
          </div>
          <ul class="profile-links">
            <li class="drop-link">
              <a href="./profile.html">
                <i class="bx bx-user icon"></i> Profile
              </a>
            </li>
            <li class="drop-link">
              <a href="../index.html">
                <i class="bx bx-log-out-circle icon"></i> Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
