import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './Profile.scss';
import Cards from './Cards/Cards';


class Profile extends Component {

  render() {
    let profile = null;
    if(this.props.user){
    const { currentUser, ridesGiven, ridesTaken } = this.props.user;
    return (
      <div>
      <div className={classes.Content}>
        <div className={classes.User}>
        <h1>{currentUser.username}</h1>
      <h4>{currentUser.email}</h4>
        </div>
        <div className={classes.Details}>
          <Link to="#rides">Total rides Given:  <span>{ridesGiven.length}</span></Link>
          <Link to="#rides">Total rides Taken:  <span>{ridesTaken.length}</span></Link>
          <Link to="#s">Total rides Request:  <span>0</span></Link>
          <Link to="#a">Total rides Request by you:  <span>0</span></Link>
        </div>
      </div>
        <div className={classes.Rides} id="#rides">
        <Cards title="Rides Given" rides={ridesGiven} />
      <Cards title="Rides Taken" rides={ridesTaken}/>
        </div>
      </div>
    );
  }
    return (
      <HashRouter>
      {profile}
      </HashRouter>
    );
  }
}

Profile.propTypes ={
  user: PropTypes.object.isRequired,
  // ridesReqSent: PropTypes.number.isRequired,
  // ridesReqReceived: PropTypes.number.isRequired,

}

const mapStateToProps = state => ({
  user: state.user.user
});


export default connect(mapStateToProps)(Profile);
