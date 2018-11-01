import React, {Fragment} from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux';
import classes from './NavBar.scss';
import Icon from '../burger';

const Navbar = (props) => {
  let NavItems;
  const style = {backgroundColor: "teal", color: "white" }
  if(!props.isAuth){
    NavItems = <Fragment><NavLink to="/signup" exact activeStyle={style}>Sign up</NavLink>
  <NavLink to="/signin" exact activeStyle={style}> Sign in </NavLink></Fragment>;
  }else{
    NavItems =
    <NavLink to="/dashboard">Dashboard</NavLink>;
  }
  return (
    <div className={classes.Navbar}>
      <div className={classes.head}>
        <Icon />
        <NavLink to="/" className={classes.Logo}>
          Ride My Way
        </NavLink>
      </div>
      <nav className={classes.NavItems}>
        {NavItems}
      </nav>
    </div>
  )
};

const mapStateToProps = state => ({
  isAuth: state.auth.auth
});

export default connect(mapStateToProps)(Navbar);
