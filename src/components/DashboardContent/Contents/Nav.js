import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Nav.scss';

const Navbar = () => {
  return (
    <div className={classes.Nav}>
      <nav className={classes.NavItems}>
        <NavLink to="/dashboard/rides/new">Create New Ride</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      </nav>
    </div>
  )
};

export default Navbar
