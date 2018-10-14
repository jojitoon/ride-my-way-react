import React from 'react';
import PropTypes from 'prop-types';

import classes from './SmallCard.scss';

const smallCard = (props) => {
  return (
    <div className={classes.card}>
        <h2>{ props.title }</h2>
        <p>{ props.date }</p>
    </div>
  );
}

smallCard.propTypes ={
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default smallCard;
