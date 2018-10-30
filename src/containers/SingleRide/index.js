import React, { Component } from 'react';
import classes from './style.scss';

class SingleRide extends Component {
  render() {
    return(
      <div className={classes.SingleRide}>
        <div className={classes.SingleCard}>

            <h2> ride-lasgidi</h2>
            <h4>Departure Location:
                <small> maryland</small>
            </h4>
            <h4>Destination:
                <small> ikeja</small>
            </h4>
            <h4>Departure Time:
                <small> 11:22 PM</small>
            </h4>
            <h4>Departure Time:
                <small> Mon Aug 06 2018</small>
            </h4>
            <h4>Avalaible slot:
                <small> 1</small>
            </h4>
            <h4>Vehicle:
                <small> sienna v2</small>
            </h4>
            <h4>Ride Status:
              <small> completed</small> </h4>
        </div>
        <div className={classes.SingleCard}>
          <h2>Your Request is sent!</h2>
        </div>
      </div>
    )
  }
}

export default SingleRide
