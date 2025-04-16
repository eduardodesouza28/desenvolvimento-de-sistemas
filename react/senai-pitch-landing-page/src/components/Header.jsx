import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Use NavLink for active styling

function Header() {
  return (
    <header className="app-header">
      <nav>
        <Link to="/" className="logo">Fappy Bird 3 </Link> {/* Replace with actual project name */}
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to="/sobre" className={({ isActive }) => isActive ? "active" : ""}>Sobre</NavLink></li>
          <li><NavLink to="/projeto" className={({ isActive }) => isActive ? "active" : ""}>Projeto</NavLink></li>
          <li><NavLink to="/contato" className={({ isActive }) => isActive ? "active" : ""}>Contato</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;