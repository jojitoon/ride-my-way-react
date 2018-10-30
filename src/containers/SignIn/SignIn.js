import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from 'Components/Forms/Form';
import Footer from 'Components/Forms/Footer';
import NavBar from 'Components/NavBar/Navbar';
import { loginUser } from 'Store/actions/auth'
import { updateObject, checkValidity } from '../../utility';

class SignIn extends Component {
  state={
    signInForm: {
      email: {
          inputType: 'input',
          elementConfig: {
              type: 'text',
              placeholder: 'Your E-Mail or Username'
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
    let userData
    if (this.state.signInForm.email.value.includes("@")) {
      userData = {
        email: this.state.signInForm.email.value,
        password: this.state.signInForm.password.value
      };
    } else {
      userData = {
        username: this.state.signInForm.email.value,
        password: this.state.signInForm.password.value
      };
    }
      this.props.signinAction(userData, this.props.history);
  }
  inputChangedHandler = (event, inputIdentifier) => {

          const updatedFormElement = updateObject(this.state.signInForm[inputIdentifier], {
              value: event.target.value,
              valid: checkValidity(event.target.value, this.state.signInForm[inputIdentifier].validation),
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

const mapDispatchToProps = dispatch => ({
  signinAction: (userData, history) => dispatch(loginUser(userData, history)),
});

export default connect(null, mapDispatchToProps)(SignIn);
