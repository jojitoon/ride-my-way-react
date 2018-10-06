import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Footer.scss';

const footer = (props) => {
    let foot = null;

  switch(props.type) {
    case('signin'):
      foot = <div>
        <NavLink to="/signup" className={classes.FooterLink}>New here? Sign Up!</NavLink>
        <NavLink to="/" className={classes.FooterLink}>forgot your password? Recover it! </NavLink>
      </div>;
      break;
    case('signup'):
      foot = <div>
        <NavLink to="/signin" className={classes.FooterLink}>Already have account? Log in!</NavLink>
      </div>;
      break;
    default:
    foot = null
  }


  return (
    foot
  );
}

export default footer;
