import React, {useContext} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const Navbar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push('/');
  };

  const authLinks = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/auth">
          Login
        </NavLink>
      </li>
    </ul>
  );

  const authLinksLogout = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <button
          type="button "
          className="btn btn-primary"
          onClick={logoutHandler}
        >
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

  if(auth.isAuth){
    return navLinksLoggedIn;
  } else {
    return navLinksNotLoggedIn;
  }
}