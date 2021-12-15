import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Navigation = () => (
  <div className="page-wrapper">
    <nav className="nav">
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? 'active-link' : 'link')}
      >
        Home
      </NavLink>
      <NavLink
        to="/form"
        className={({ isActive }) => (isActive ? 'active-link' : 'link')}
      >
        Add Book
      </NavLink>
      <NavLink
        to="/books"
        className={({ isActive }) => (isActive ? 'active-link' : 'link')}
      >
        Book List
      </NavLink>
    </nav>
    <Outlet />
  </div>
);

export default Navigation;
