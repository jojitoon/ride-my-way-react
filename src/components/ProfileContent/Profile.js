import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './Profile.scss'
import Cards from './Cards/Cards'


const array= [
  {
    title: "ride 1",
    date: "today"
  },
  {
    title: "ride 1",
    date: "today"
  },
  {
    title: "ride 1",
    date: "today"
  },
  {
    title: "ride 1",
    date: "today"
  },
  {
    title: "ride 1",
    date: "today"
  },
]
class Profile extends Component {
  render() {
    return (
      <HashRouter>
      <div>
      <div className={classes.Content}>
        <div className={classes.User}>
        <h1>UserName</h1>
          <h4>username.gmail.com</h4>
        </div>
        <div className={classes.Details}>
        <Link to="#rides">Total rides Given:  <span>{this.props.ridesGiven}</span></Link>
        <Link to="#rides">Total rides Taken:  <span>{this.props.ridesTaken}</span></Link>
        <Link to="#s">Total rides Request:  <span>{this.props.ridesReqReceived}</span></Link>
        <Link to="#a">Total rides Request by you:  <span>{this.props.ridesReqSent}</span></Link>
        </div>
      </div>
        <div className={classes.Rides} id="#rides">
        <Cards title="Rides Given" rides={array} />
          <Cards title="Rides Taken" rides={array} />
        </div>
      </div>
      </HashRouter>
    );
  }
}

Profile.propTypes ={
  ridesGiven: PropTypes.number.isRequired,
  ridesTaken: PropTypes.number.isRequired,
  ridesReqSent: PropTypes.number.isRequired,
  ridesReqReceived: PropTypes.number.isRequired,
}
export default Profile;
