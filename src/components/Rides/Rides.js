import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import timeConvert from 'Utility/timeConvert';
import classes from './Rides.scss';
import Ride from './Ride';

const Rides = (props) => {
  const { rides } = props;
  const mapped = rides.map(ride =>{
    return <Ride
        key={ride.id}
        id={ride.id}
        title={ride.name}
        destination={ride.destination}
        location={ride.location}
        slot={ride.slot}
        driver={ride.driver}
        date={ride.created_at.split("T")[0].replace(/-/g, " ")}
        time={timeConvert(ride.time)}
        clicked={() => props.history.push(`/dashboard/rides/${ride.id}`)}
      />
    });
  return (
    <div className={classes.Rides}>
      {mapped}
    </div>
  )
}

Rides.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  rides: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
  rides: state.rides.rides,
});


export default connect(mapStateToProps)(withRouter(Rides));
