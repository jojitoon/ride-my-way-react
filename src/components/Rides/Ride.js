import React from 'react'
import PropTypes from 'prop-types';
import classes from './Rides.scss';

const Ride = (props) => (
    <div className={classes.Ride} onClick={props.clicked}>
      <h2>{props.title}</h2>
      <p> From {props.location} to {props.destination}</p>
      <p> <b>{props.slot}</b>  Seat Available</p>

      <div className={classes.driver}>
      <span><p>{props.driver}</p>
      <p>{props.date}</p></span>
      </div>
    </div>
  );

  Ride.propTypes ={
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  slot: PropTypes.number.isRequired,
  driver: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  car: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired
};

export default Ride;
