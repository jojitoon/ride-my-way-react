import React from 'react';

import classes from './style.scss';
import Form from './JumboForm';

const jumbo = () => {
  return (
    <div className={classes.jumbo}>
      <div className={classes.jumboChild}>
        <span>
        <h1> You are just a ride away </h1>
        <p>We both share a common vision to bring people together.<br></br>
        To ride with strangers turn best of friends, join us. </p>
        </span>
        <Form />
      </div>
      <div className={classes.scroll}><span></span></div>
    </div>
  );
}

export default jumbo;
