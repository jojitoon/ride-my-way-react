import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from 'Store/actions/auth';
import classes from './style.scss';
import changeNav from '../../store/actions/nav';

const SideNav = (props) => {
  const style = {
      fontWeight: 'bolder',
    };
  let navLinks = <nav className={classes.Nav}>
          <NavLink to="/signup" exact activeStyle={style}>Sign up</NavLink>
        <NavLink to="/signin" exact activeStyle={style}>Sign In</NavLink>
      </nav>;
  let attachedClasses = [classes.SideDrawer, classes.Close];
  let backClasses = [classes.Backdrop, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
        backClasses = [classes.Backdrop, classes.Open]
    }

    if(props.isAuth){
      navLinks = <nav className={classes.Nav}>
            <NavLink to="/dashboard" exact activeStyle={style}>Dashboard</NavLink>
          <NavLink to="/dashboard/rides/new" exact activeStyle={style}>Create Ride</NavLink>
        <NavLink to="/dashboard/rides" exact activeStyle={style}>All rides</NavLink>
      <NavLink to="/dashboard/requests" exact activeStyle={style}>All requests</NavLink>
          <a className={classes.logout} href="#" onClick={()=> props.signoutAction(props.history)}>Sign Out</a>
      </nav>
    }
  return (
    <Fragment>
            <div className={backClasses.join(' ')} onClick={props.closeNav}></div>
          <div className={attachedClasses.join(' ')} onClick={props.closeNav}>
                <div className={classes.Logo}>
                    Ride my way
                </div>
                {navLinks}
            </div>
        </Fragment>
  )
}
const mapStateToProps = state => ({
  open: state.nav.open,
  isAuth: state.auth.auth
});
const mapDispatchToProps = dispatch => ({
  closeNav: ()=>dispatch(changeNav()),
  signoutAction: (history) => dispatch(logoutUser(history)),
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SideNav));
