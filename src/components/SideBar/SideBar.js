import React from 'react';

import classes from './SideBar.scss';
import Header from './sidebarProps/Header';
import SideNav from './sidebarProps/sideNav';

const sideBar = () => {
  return (
    <div className={classes.SideBar}>
      <div className={classes.inner}>
        <Header/>
        <SideNav />
      </div>
    </div>
  );
}

export default sideBar;
