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

const dashboardContent = () => {
  return (
    <div className={classes.dashContent}>
      <TopNav />
      <Switch>
      <Route path="/dashboard" exact component={asyncProfile}/>
      <Route path="/dashboard/rides" component={asyncRides}/>
      <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default dashboardContent;
