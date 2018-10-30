import React, { Component } from 'react';

import Form from 'Components/Forms/Form';
import Footer from 'Components/Forms/Footer';
import NavBar from 'Components/NavBar/Navbar';
import { updateObject, checkValidity } from '../../utility';

class SignIn extends Component {
  state={
    signInForm: {
      email: {
          inputType: 'input',
          elementConfig: {
              type: 'email',
              placeholder: 'Your E-Mail'
          },
          value: '',
          validation: {
              required: true,
              isEmail: true
          },
          valid: false,
          touched: false
      },
      password: {
        inputType: 'input',
        elementConfig: {
            type: 'password',
            placeholder: 'Your Password'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    }
  }
  }
  onBtnClick = (e) => {
    e.preventDefault();
      console.log(this.state.signInForm.email.value, this.state.signInForm.password.value)
  }
  inputChangedHandler = (event, inputIdentifier) => {

          const updatedFormElement = updateObject(this.state.signInForm[inputIdentifier], {
              value: event.target.value,
              valid: checkValidity(event.target.value, this.state.signInForm[inputIdentifier].validation),
              // touched: true
          });
          const updatedOrderForm = updateObject(this.state.signInForm, {
              [inputIdentifier]: updatedFormElement
          });

          let formIsValid = true;
          for (let inputIdentifier in updatedOrderForm) {
              formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
          }
          this.setState({signInForm: updatedOrderForm, formIsValid: formIsValid});
      }
  render() {
    return (
      <div>
      <NavBar />
          <h1 style={{textAlign: 'center', color: '#bbb'}}>Sign In</h1>
        <Form form={this.state.signInForm} btnName="Sign In" btnClick={this.onBtnClick} onChanged={this.inputChangedHandler}/>
          <Footer type="signin" />
      </div>
    );
  }
}

export default SignIn;
