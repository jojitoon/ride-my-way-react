import React, { Component } from 'react';
import PropTypes from 'prop-types';


import Input from './Input/Input';
import Button from './Buttons/Buttons';
import classes from './Form.scss';

class form extends Component {


  render() {
    const formElementsArray = [];
    for (let key in this.props.form) {
        formElementsArray.push({
            id: key,
            config: this.props.form[key]
        });
    }
    const inputs = formElementsArray.map(formElement => {
      return <Input
          key={formElement.id}
          inputType={formElement.config.inputType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          changed={(event) => this.props.onChanged(event, formElement.id)}
          />
    });

        return (<form className={classes.Form} onSubmit={this.props.btnClick}>
                   {inputs}
                  <Button btnType="Success">{this.props.btnName}</Button>
                </form>
        );

  }
}

form.propTypes = {
  btnName: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,
  btnClick: PropTypes.func.isRequired,
  onChanged: PropTypes.func.isRequired
}

export default form;
