import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './NavBar.scss';

const Navbar = () => {
  return (
    <div className={classes.Navbar}>
      <NavLink to="/" className={classes.Logo}>
        Ride My Way
      </NavLink>
      <nav className={classes.NavItems}>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/signIn">Sign in</NavLink>
      </nav>
    </div>
  )
};

export default Navbar
