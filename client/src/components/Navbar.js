import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = (isAuth = false) => {

  const authLinks = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <button type="button " className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Login
        </button>
      </li>
      <li className="nav-item">
        <button type="button " className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Registration
        </button>
      </li>
    </ul>
  );

  const authLinksLogout = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <button type="button " className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Logout
        </button>
      </li>
    </ul>
  );

  const navLinksLoggedIn = (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary d-flex justify-content-between">
      <ul className="navbar-nav">
        <li>
          <div className="navbar-brand">TEST SHOP</div>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/" exact>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/categories">Categories</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/mygoods">My goods</NavLink>
        </li>
      </ul>

      {authLinksLogout}
    </nav>
  );

  const navLinksNotLoggedIn = (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary d-flex justify-content-between">
      <ul className="navbar-nav">
        <li>
          <div className="navbar-brand">TEST SHOP</div>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/" exact>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/categories">Categories</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
      </ul>

      {authLinks}
    </nav>
  );

  if(isAuth){
    return navLinksLoggedIn;
  } else {
    return navLinksNotLoggedIn;
  }
}