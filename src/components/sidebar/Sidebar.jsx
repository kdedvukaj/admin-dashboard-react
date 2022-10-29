import React from "react";

const Sidebar = () => {
  return (
    <nav class="sidebar close">
      <header>
        <div class="image-text">
          <span class="image">
            <a href="./">
              <img src="./img/logo.png" alt="" />
            </a>
          </span>

          <div class="text logo-text">
            <span class="name">Cortex</span>
            <span class="profession">Library</span>
          </div>
        </div>
        <i class="bx bx-right-arrow-alt toggle-ch"></i>
      </header>

      <div class="menu-bar">
        <div class="menu">
          <ul class="menu-links">
            <li class="nav-link">
              <a href="./index.html">
                <i class="bx bx-home-alt icon"></i>
                <span class="text nav-text">Dashboard</span>
              </a>
            </li>

            <li class="nav-link">
              <a href="./librarians.html">
                <i class="bx bx-group icon"></i>
                <span class="text nav-text">Bibliotekari</span>
              </a>
            </li>

            <li class="nav-link">
              <a href="./students.html">
                <i class="bx bx-id-card icon"></i>
                <span class="text nav-text">Ucenici</span>
              </a>
            </li>

            <li class="nav-link">
              <a href="./books.html">
                <i class="bx bx-book-alt icon"></i>
                <span class="text nav-text">Knjige</span>
              </a>
            </li>

            <li class="nav-link">
              <a href="./authors.html">
                <i class="bx bx-briefcase-alt-2 icon"></i>
                <span class="text nav-text">Autori</span>
              </a>
            </li>

            <li class="nav-link">
              <a href="./rental.html">
                <i class="bx bx-repost icon"></i>
                <span class="text nav-text">Izdavanje Knjiga</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="bottom-content">
          <ul>
            <li class="nav-link">
              <a href="./settings.html">
                <i class="bx bx-wrench icon"></i>
                <span class="text nav-text">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
