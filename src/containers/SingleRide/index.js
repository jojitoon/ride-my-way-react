import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Loader from 'Components/Loader';
import timeConvert from 'Utility/timeConvert'
import { getRide } from 'Store/actions/rides';
import classes from './style.scss';

// id(pin): 3
// name(pin): "ride-lasgidi"
// location(pin): "maryland"
// destination(pin): "ikeja"
// slot(pin): 3
// time(pin): "23:22:00"
// user_id(pin): "462e85bf-abcc-4953-b74b-9378fb6bba3d"
// driver(pin): "andela"
// carmodel(pin): "sienna v2"
// takeoffdate(pin): "2018-07-01T00:00:00.000Z"
// status(pin): "completed"
// riders(pin):
// created_at(pin): "2018-08-01T18:49:48.450Z"
// class SingleRide extends Component {

class SingleRide extends Component {

  componentDidMount(){
    this.props.getSingleRide(this.props.match.params.rideId);
  }

  render() {
  let detail = null;

  if(this.props.ride){
    const { name,location, destination, slot, time, driver, carmodel, takeoffdate, status, riders } = this.props.ride;
    const date = new Date(Date.parse(takeoffdate.split("T")[0]));
    const takeOff = date.toDateString().split(" ").join(" ");
    detail = <Fragment>
      <div className={classes.SingleCard}>

          <h2> {name}</h2>
          <h4>Departure Location:
              <small> {location}</small>
          </h4>
          <h4>Destination:
              <small> {destination}</small>
          </h4>
          <h4>Departure Time:
              <small> {timeConvert(time)}</small>
          </h4>
          <h4>Departure Date:
              <small> {takeOff}</small>
          </h4>
          <h4>Avalaible seats:
              <small> {slot}</small>
          </h4>
          <h4>Vehicle:
              <small> {carmodel}</small>
          </h4>
          <h4>Ride Status:
            <small> {status}</small> </h4>
      </div>
      <div className={classes.SingleCard}>
        <h2>Your Request is sent!</h2>
      </div>
    </Fragment>
  }


    return(
      <div className={classes.SingleRide}>
        {this.props.loading ? <Loader /> : detail }
      </div>
    )
  }
}


const mapStateToProps = state => ({
  loading: state.rides.loading,
  ride: state.rides.singleRide
});


const mapDispatchToProps = dispatch => ({
  getSingleRide: (id) => dispatch(getRide(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleRide);
