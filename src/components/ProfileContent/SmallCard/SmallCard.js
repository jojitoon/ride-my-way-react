import React from 'react';
import PropTypes from 'prop-types';

import classes from './SmallCard.scss';

const smallCard = (props) => {
  return (
    <div className={classes.card} onClick={props.clicked}>
        <h2>{ props.title }</h2>
      <p>{ props.status }</p>
    </div>
  );
}

smallCard.propTypes ={
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired
}

export default smallCard;
