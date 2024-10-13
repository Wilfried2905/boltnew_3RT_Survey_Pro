import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          3RT Survey Pro
        </div>
        <div className="navbar-menu">
          <Link to="/dashboard" className="navbar-item">Tableau de bord</Link>
          <Link to="/survey" className="navbar-item">Survey</Link>
          <Link to="/reports" className="navbar-item">Rapports</Link>
          <Link to="/recommendations" className="navbar-item">Recommandations</Link>
          <Link to="/planning" className="navbar-item">Planning</Link>
          <Link to="/user-management" className="navbar-item">Gestion utilisateurs</Link>
          <Link to="/search" className="navbar-item">Recherche</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
