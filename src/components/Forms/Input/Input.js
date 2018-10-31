import React from 'react';
import classes from './Input.scss';

const input = (props) => {

  let inputElement = null;
  switch ( props.inputType ) {
    case ( 'input' ):
        inputElement = <input
            className={classes.input}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}

            />;
        break;
    default:
        inputElement = <input
            className={classes.input}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}

            />;
}



  return (
        inputElement
  );
}

export default input;
