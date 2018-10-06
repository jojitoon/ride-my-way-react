import React from 'react'

import classes from './style.scss';

const jumboForm = () => {
  return (
    <div className={classes.form}>
      <h2>Find a ride</h2>
      <form>
        <input type="text" placeholder="Enter your username"/>
        <input type="text" placeholder="Enter your email"/>
        <input type="button" className={classes.btn} value="Join a ride" />
        <div>
          <br></br>
          <br></br>
          you would never want to go back if you join.
        </div>
      </form>
    </div>
  )
}

export default jumboForm;
