import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.scss';

const button = (props) => (
    <button
        disabled={props.disabled}
        className={`${classes.Button} ${classes[props.btnType]}`}
        onClick={props.clicked}>{props.children}</button>
);

button.propTypes={
  disabled: PropTypes.bool,
  btnType: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
}


export default button;