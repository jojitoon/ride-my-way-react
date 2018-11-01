import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string'

import Form from 'Components/Forms/Form';
import Footer from 'Components/Forms/Footer';
import NavBar from 'Components/NavBar/Navbar';
import { signupUser } from 'Store/actions/auth';
import { setError } from 'Store/actions/message';
import { updateObject, checkValidity } from '../../utility';
import classes from './style.scss';

class SignUp extends Component {
  state={
    signUpForm: {
      name: {
          inputType: 'input',
          elementConfig: {
              type: 'text',
              placeholder: 'Your Username',
              minLength: "3",
              required: true
          },
          value: '',
          validation: {
              required: true
          },
          valid: false,
          touched: false
      },
      email: {
          inputType: 'input',
          elementConfig: {
              type: 'email',
              placeholder: 'Your E-Mail',
              required: true
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
            placeholder: 'Enter Password Eg: Password',
            minLength: "8",
            required: true
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
    passwordConfirmation: {
      inputType: 'input',
      elementConfig: {
          type: 'password',
          placeholder: 'Confirm password',
          minLength: "8",
          required: true
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

  componentDidMount(){
    if(this.props.location&& this.props.location.search.includes('?')){
    const values = queryString.parse(this.props.location.search);
    const updatedusername =updateObject(this.state.signUpForm['name'],{
      value: values.username
    });
    const updatedemail =updateObject(this.state.signUpForm['email'],{
      value: values.email
    });

    const updatedForm = updateObject(this.state.signUpForm, {
        name: updatedusername,
        email: updatedemail
    });
    this.setState({ signUpForm: updatedForm});
  }
  }
  onBtnClick = (e) => {
    e.preventDefault();
    if(this.state.signUpForm.password.value !== this.state.signUpForm.passwordConfirmation.value){
      return this.props.setErrorAction("passwords do not match");
    }
    const userData = {
      username: this.state.signUpForm.name.value,
      email: this.state.signUpForm.email.value,
      password: this.state.signUpForm.password.value
    }
      this.props.signupAction(userData, this.props.history);
  }
  inputChangedHandler = (event, inputIdentifier) => {

          const updatedFormElement = updateObject(this.state.signUpForm[inputIdentifier], {
              value: event.target.value,
              valid: checkValidity(event.target.value, this.state.signUpForm[inputIdentifier].validation),
              // touched: true
          });
          const updatedForm = updateObject(this.state.signUpForm, {
              [inputIdentifier]: updatedFormElement
          });

          let formIsValid = true;
          for (let inputIdentifier in updatedForm) {
              formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
          }
          this.setState({signUpForm: updatedForm, formIsValid: formIsValid});
      }
  render() {
    return (
      <div>
      <NavBar />
          <h1 style={{textAlign: 'center', color: '#bbb'}}>Sign Up</h1>
        <div className={classes.signup}>
        <Form form={this.state.signUpForm} btnName="Sign Up" btnClick={this.onBtnClick} onChanged={this.inputChangedHandler}/>
     </div>
          <Footer type="signup" />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signupAction: (userData, history) => dispatch(signupUser(userData, history)),
  setErrorAction: (error) => dispatch(setError(error))
});

export default connect(null, mapDispatchToProps)(SignUp);
