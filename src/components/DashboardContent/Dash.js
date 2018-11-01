import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Async from 'Hoc/AsyncComponent';
import TopNav from 'Components/DashboardContent/Contents/Nav';

// import asyncProfile from 'Containers/Profile/Profile';
// import asyncRides from 'Containers/Rides/Rides';
import NotFound from 'Containers/NotFound/NotFound';
import classes from './Dash.scss';

const asyncProfile = Async(() => {
  return import('Containers/Profile/Profile');
});
const asyncRides = Async(() => {
  return import('Containers/Rides/Rides');
});
const asyncSingleRide = Async(() => {
  return import('Containers/SingleRide');
});

const asyncNewRide = Async(() => {
  return import('Containers/NewRide');
});

const asyncRequests = Async(() => {
  return import('Containers/Requests');
});
const dashboardContent = () => {
  return (
    <div className={classes.dashContent}>
      <TopNav />
      <Switch>
      <Route path="/dashboard" exact component={asyncProfile}/>
    <Route path="/dashboard/rides/new" exact component={asyncNewRide}/>
    <Route path="/dashboard/rides/:rideId" component={asyncSingleRide}/>
    <Route path="/dashboard/rides" exact component={asyncRides}/>
  <Route path="/dashboard/requests" exact component={asyncRequests}/>
      <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default dashboardContent;
