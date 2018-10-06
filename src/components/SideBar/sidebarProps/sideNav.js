import React from 'react';
import { NavLink } from 'react-router-dom';
// import Proptypes from 'prop-types';

import classes from './styles.scss';

const style = {
    fontWeight: 'bold',
    borderLeft: '4px teal solid'
  };
const sideNav = () => {
    return(
      <div className={classes.sideNav}>
      {/* <NavLink to="/dashboard/profile" activeStyle={style}>Profile</NavLink> */}
      <NavLink to="/dashboard" exact activeStyle={style}>Dashboard</NavLink>
      <NavLink to="/dashboard/rides" activeStyle={style}>All rides</NavLink>
      </div>

    );
};

// sideNav.propTypes ={
//   username: Proptypes.string.isRequired
// };

export default sideNav;
