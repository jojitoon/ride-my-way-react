import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input/Input';
import Button from './Buttons/Buttons';
import classes from './Form.scss';

class form extends Component {
  render() {
    const formElementsArray = [];
    for (let key in this.props.orderForm) {
        formElementsArray.push({
            id: key,
            config: this.props.orderForm[key]
        });
    }
    const inputs = formElementsArray.map(formElement => {
      return <Input
          key={formElement.id}
          inputType={formElement.config.inputType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          // invalid={!formElement.config.valid}
          // shouldValidate={formElement.config.validation}
          // touched={formElement.config.touched}
          changed={this.props.onChanged}
          />
    });

        return (<form className={classes.Form}>
                   {inputs}
                  <Button btnType="Success" clicked={this.props.btnClick}>{this.props.btnName}</Button>
                </form>
        );

  }
}

form.propTypes = {
  btnName: PropTypes.string.isRequired,
  orderForm: PropTypes.object.isRequired,
  btnClick: PropTypes.func.isRequired,
  onChanged: PropTypes.func.isRequired
}

export default form;
