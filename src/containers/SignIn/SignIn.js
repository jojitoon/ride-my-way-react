import React, { Component } from 'react';

import Form from 'Components/Forms/Form';
import Footer from 'Components/Forms/Footer';
import NavBar from 'Components/NavBar/Navbar';

class SignIn extends Component {
  state={
    orderForm: {
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
      console.log('clicked');
  }
  render() {
    return (
      <div>
      <NavBar />
          <h1 style={{textAlign: "center", color: "#bbb"}}>Sign In</h1>
          <Form orderForm={this.state.orderForm} btnName="Sign In" btnClick={this.onBtnClick} onChanged={this.onBtnClick}/>
          <Footer type="signin" />
      </div>
    );
  }
}

export default SignIn;
