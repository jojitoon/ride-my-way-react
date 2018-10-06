import React, { Component } from 'react';

import SideBar from 'Components/SideBar/SideBar';
import MainContent from 'Components/DashboardContent/Dash';

import classes from './Dashboard.scss';

class Dashboard extends Component {
  render() {
    return (
      <div className={classes.Dashboard}>
        <SideBar />
        <MainContent />
      </div>
    );
  }
}

export default Dashboard;
