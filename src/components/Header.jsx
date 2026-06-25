import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header({ onToggleTheme, theme }) {
  return (
    <header className="app-header">
      <div className="header-brand">
        <Link to="/" className="brand-link">
          <span className="brand-icon">📝</span>
          <span className="brand-text">CatatanKu</span>
        </Link>
      </div>

      <nav className="navigation">
        <ul>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Catatan
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/archived"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Arsip
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="header-actions">
        <Link to="/notes/new" className="btn-add-header" title="Tambah Catatan Baru">
          <span>＋</span>
          <span className="btn-add-text">Catatan Baru</span>
        </Link>
        <button
          className="toggle-theme"
          onClick={onToggleTheme}
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
}

export default Header;
