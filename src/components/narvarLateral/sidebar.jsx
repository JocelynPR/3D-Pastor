// Sidebar.js
import React, { useState } from 'react';
import '../../styles/productRegistration/productRegistration.css';

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const menuBtnChange = () => {
    // Cambia la clase del botón según el estado de la barra lateral
    if (isSidebarOpen) {
      return 'bx-menu-alt-right';
    } else {
      return 'bx-menu';
    }
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="logo-details">
        <i className='bx bxl-c-plus-plus icon'></i>
        <div className="logo_name">CodingLab</div>
        <i className={`bx ${menuBtnChange()}`} id="btn" onClick={toggleSidebar}></i>
      </div>
      <ul className="nav-list">
        <li>
          <i className='bx bx-search'></i>
          <input type="text" placeholder="Search..." />
          <span className="tooltip">Search</span>
        </li>
        <li>
          <a href="#">
            <i className='bx bx-grid-alt'></i>
            <span className="links_name">Dashboard</span>
          </a>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <a href="#">
            <i className='bx bx-user'></i>
            <span className="links_name">User</span>
          </a>
          <span className="tooltip">User</span>
        </li>
        {/* Agrega más elementos de lista según tus necesidades */}
        <li className="profile">
          <div className="profile-details">
            <img src="profile.jpg" alt="profileImg" />
            <div className="name_job">
              <div className="name">Prem Shahi</div>
              <div className="job">Web designer</div>
            </div>
          </div>
          <i className='bx bx-log-out' id="log_out"></i>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;