import React from 'react';

import classes from './style.scss';
import Form from './JumboForm';

const jumbo = () => {
  return (
    <div className={classes.jumbo}>
      <div className={classes.jumboChild}>
        <span>
        <h1> Join Us on a ride</h1>
        <p>Have a free fun drive today.</p>
        </span>
        <Form />
      </div>
      <div className={classes.scroll}><span></span></div>
    </div>
  );
}

export default jumbo;
