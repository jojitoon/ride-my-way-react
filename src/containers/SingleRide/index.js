import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Loader from 'Components/Loader';
import timeConvert from 'Utility/timeConvert'
import { getRide, joinRide, getYourRequest } from 'Store/actions/rides';
import classes from './style.scss';

class SingleRide extends Component {

  componentDidMount(){
    this.props.getSingleRide(this.props.match.params.rideId);
    this.props.getRequest(this.props.match.params.rideId);
  }
  checkBtn = (status) => {
    const { myRequest } = this.props;
    if (status === "completed") {
      return <p>Ride is completed Already!</p>
    }
  else {
    if(myRequest && myRequest.message){
    return <button className={classes.join} onClick={() => this.props.joinSingleRide(this.props.match.params.rideId)}>Join</button>
  }
  else {
    return <p>Please wait for your response</p>
  }
  }
  }
  render() {
  let detail = null;

  if(this.props.ride){
    const { name,location, destination, slot, time, driver, carmodel, takeoffdate, status, riders } = this.props.ride;
    let  allRiders = status === ("completed"||"cancelled")? <p>Nobody is on this ride</p>:<p>Be the first to join this ride .</p>
    if (riders.length) {
      allRiders = riders.map((rider) => {
        return <p key={rider}>{rider}</p>
      });
    }

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
          <h4>Created by:
              <small>{driver}</small>
          </h4>
          <h4>Ride Status:
            <small> {status}</small> </h4>
      </div>
      <div className={classes.SingleCard}>
        <h2>Action</h2>
      <hr />
    {this.checkBtn(status)}
    <hr />
    <div>
      <h3>Those on this Ride</h3>
    {allRiders}
    </div>
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
  ride: state.rides.singleRide,
  myRequest: state.rides.myRequest
});


const mapDispatchToProps = dispatch => ({
  getSingleRide: (id) => dispatch(getRide(id)),
  getRequest: (id) => dispatch(getYourRequest(id)),
  joinSingleRide: (id) => dispatch(joinRide(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleRide);
