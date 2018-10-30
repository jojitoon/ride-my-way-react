import React from 'react';
import classes from './style.scss';

const Loader = () => {
  return (
    <div className={classes.container}>
  <div className={classes.dash_one}></div>
<div className={classes.dash_two}></div>
  <div className={classes.dash_three}></div>
<div className={classes.dash_four}></div>
</div>
  )
}

export default Loader
