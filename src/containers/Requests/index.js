import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRequest } from 'Store/actions/rides';
import classes from './styles.scss';
/**
 * Requests
 */
export class Requests extends Component {
  componentDidMount(){
    this.props.getRequestAction()
  }

  checkBtn = (status) => {
    if (status === "pending request") {
      return(
        <div>
        <a onClick={() => null } className={classes.btn_green}> Accept</a>
      <a onClick={() =>null} className={classes.btn_red}> Reject</a>
    </div>
        );
      } else {
        return <p>{status}</p>;
      }
  }
  render() {
    const { requestSent, requestRecieve } = this.props.requests;

    let ReqReceived = <p>No Request</p>
    let ReqSent = <p>No Request</p>
    if(requestRecieve && requestRecieve.length){
      ReqReceived = requestRecieve.map(req =>{
        return <div key={req.id} className={classes.single}>
          <div>
        <h3>{req.ride_name}</h3>
        <p>{req.rider}</p>
    </div>
    <div className={classes.btn}>
      {this.checkBtn(req.status)}
    </div>
        </div>
        });
    }
    if(requestSent && requestSent.length){
      ReqSent = requestSent.map(req =>{
        return <div key={req.id} className={classes.single}>
          <h3>{req.ride_name}</h3>
        <p>{req.status}</p>
        </div>
        });
    }
    console.log(this.props.requests);
    return (
      <div className={classes.Requests}>
        <div className={classes.card}>
          <h3> Ride Request Sent To You </h3>
        <hr />
      {ReqReceived}
        </div>
        <div className={classes.card}>
          <h3>Request Request You sent</h3>
          <hr />
        {ReqSent}
        </div>
      </div>
    );
  }
}


Requests.propTypes = {
  requests: PropTypes.object.isRequired,
  getRequestAction: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  requests: state.rides.requests,
});

const mapDispatchToProps = dispatch => ({
  getRequestAction: () => dispatch(getRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Requests);
