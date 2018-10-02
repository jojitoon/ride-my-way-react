import React from 'react';
import PropTypes from 'prop-types'
import classes from './style.scss';

const column = (props) => {
  return (
    <div className={classes.Column}>
    <img src={props.img.icon} alt={props.img.imgAlt} width={props.img.width}></img>
    <h3>{props.title}</h3>
    <p>
        {props.children}
    </p>
    </div>
  );
};

column.propTypes = {
  img: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default column;
