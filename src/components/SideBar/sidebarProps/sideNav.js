import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from 'Store/actions/auth'
import PropTypes from 'prop-types';

import classes from './styles.scss';

const style = {
    fontWeight: 'bold',
    borderLeft: '4px teal solid'
  };
const sideNav = (props) => {
    return(
      <div className={classes.sideNav}>
      <div className={classes.upper}>
      <NavLink to="/dashboard" exact activeStyle={style}>Dashboard</NavLink>
      <NavLink to="/dashboard/rides" activeStyle={style}>All rides</NavLink>
    </div>
      <a className={classes.logout} href="#" onClick={()=> props.signoutAction(props.history)}>Sign Out</a>
    </div>

    );
};

sideNav.propTypes ={
  signoutAction: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired
};
const mapDispatchToProps = dispatch => ({
  signoutAction: (history) => dispatch(logoutUser(history)),
});

export default connect(null, mapDispatchToProps)(withRouter(sideNav));
