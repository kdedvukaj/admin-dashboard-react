import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ closeSdb }) => {
  return (
    <nav className={closeSdb ? "sidebar close" : "sidebar"}>
      <header>
        <div className="image-text">
          <span className="image">
            <Link to="/">
              <img src="./img/logo.png" alt="" />
            </Link>
          </span>

          <div className="text logo-text">
            <span className="name">Cortex</span>
            <span className="profession">Library</span>
          </div>
        </div>
        <i className="bx bx-right-arrow-alt toggle-ch"></i>
      </header>

      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
            <li className="nav-link">
              <Link to="/">
                <i className="bx bx-home-alt icon"></i>
                <span className="text nav-text">Dashboard</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link to="/librarians">
                <i className="bx bx-group icon"></i>
                <span className="text nav-text">Bibliotekari</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link to="/students">
                <i className="bx bx-id-card icon"></i>
                <span className="text nav-text">Ucenici</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link to="/books">
                <i className="bx bx-book-alt icon"></i>
                <span className="text nav-text">Knjige</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link to="/">
                <i className="bx bx-briefcase-alt-2 icon"></i>
                <span className="text nav-text">Autori</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link to="/">
                <i className="bx bx-repost icon"></i>
                <span className="text nav-text">Izdavanje Knjiga</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <ul>
            <li className="nav-link">
              <Link to="/">
                <i className="bx bx-wrench icon"></i>
                <span className="text nav-text">Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
