import React from "react";
import { Link } from "react-router-dom";

import logo from "../../img/logo.png";

const Sidebar = () => {
  return (
    <nav class="sidebar close">
      <header>
        <div class="image-text">
          <span class="image">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
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
              <Link to="/">
                <i class="bx bx-home-alt icon"></i>
                <span class="text nav-text">Dashboard</span>
              </Link>
            </li>

            <li class="nav-link">
              <Link to="/list">
                <i class="bx bx-group icon"></i>
                <span class="text nav-text">Bibliotekari</span>
              </Link>
            </li>

            <li class="nav-link">
              <Link to="/list">
                <i class="bx bx-id-card icon"></i>
                <span class="text nav-text">Ucenici</span>
              </Link>
            </li>

            <li class="nav-link">
              <Link to="/list">
                <i class="bx bx-book-alt icon"></i>
                <span class="text nav-text">Knjige</span>
              </Link>
            </li>

            <li class="nav-link">
              <Link to="/">
                <i class="bx bx-briefcase-alt-2 icon"></i>
                <span class="text nav-text">Autori</span>
              </Link>
            </li>

            <li class="nav-link">
              <Link to="/">
                <i class="bx bx-repost icon"></i>
                <span class="text nav-text">Izdavanje Knjiga</span>
              </Link>
            </li>
          </ul>
        </div>

        <div class="bottom-content">
          <ul>
            <li class="nav-link">
              <Link to="/">
                <i class="bx bx-wrench icon"></i>
                <span class="text nav-text">Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
