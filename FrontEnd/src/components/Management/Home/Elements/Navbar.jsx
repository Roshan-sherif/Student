import React from 'react';
import './Navabar.css';

const ManagementNavbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <button className="menu-button" onClick={toggleSidebar}>
          ☰
        </button>
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
          <h2>DSCET Management Portal</h2>
        </div>
      </div>
    </nav>
  );
};

export default ManagementNavbar;
