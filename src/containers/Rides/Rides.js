import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllRides } from 'Store/actions/rides';
import Ride from 'Components/Rides/Rides';
import Aux from 'Hoc/Aux';
import Loader from 'Components/Loader'
import classes from './Rides.scss';

class Rides extends Component {
  componentDidMount(){
    this.props.getRides();
  }
  render(){
    return (
        <Aux><h2>All Rides</h2>
      <div className={classes.Rides}>
          {this.props.loading ? <Loader /> : <Ride />}
       </div>
       </Aux>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.rides.loading,
});

const mapDispatchToProps = dispatch => ({
  getRides: () => dispatch(getAllRides()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rides);
