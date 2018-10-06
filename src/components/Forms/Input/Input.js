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
    case ( 'textarea' ):
        inputElement = <textarea
            className={classes.input}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}

            />;
        break;
    case ( 'select' ):
        inputElement = (
            <select
                className={classes.input}
                value={props.value}
                onChange={props.changed}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>
        );
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