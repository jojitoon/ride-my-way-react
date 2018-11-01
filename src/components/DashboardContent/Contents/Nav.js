import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Nav.scss';
import Icon from '../../burger';

const Navbar = () => {
  const style = {backgroundColor: "teal", color: "white" };
  return (
    <div className={classes.Nav}>
      <Icon />
      <nav className={classes.NavItems}>
        <NavLink to="/dashboard/rides/new" exact activeStyle={style} className={classes.largeOnly}>Create Ride</NavLink>
      <NavLink to="/dashboard" exact activeStyle={style}>Dashboard</NavLink>
      </nav>
    </div>
  )
};

export default Navbar
