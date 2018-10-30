import React, { Component } from 'react';
import Ride from 'Components/Rides/Rides';
import Aux from 'Hoc/Aux';
import classes from './Rides.scss';

class Rides extends Component {

  render(){
    return (
        <Aux><h2>All Rides</h2>
      <div className={classes.Rides}>
          <Ride />
       </div>
       </Aux>
    );
  }
}

export default Rides;
