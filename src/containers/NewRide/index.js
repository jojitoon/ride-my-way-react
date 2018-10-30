import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from 'Components/Forms/Form';
import { createRide } from 'Store/actions/rides';
import { updateObject, checkValidity } from '../../utility';

/**
 * NewRide
 */

        //
        // name: name.value,
        // location: location.value,
        // destination: destination.value,
        // time: time.value,
        // takeOffDate: date.value,
        // carModel: car.value,
        // slot: Number(slot.value)
        //
export class NewRide extends Component {

    state={
      rideForm: {
        name: {
            inputType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'A name for your ride',
                minLength: "3",
                required: true
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
        },
        location: {
          inputType: 'input',
          elementConfig: {
              type: 'text',
              placeholder: 'Where are you going from ?',
              minLength: "3",
              required: true
          },
          value: '',
          validation: {
              required: true
          },
          valid: false,
      },
      destination: {
        inputType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Where are you going to ?',
            minLength: "3",
            required: true
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
    },
    time: {
      inputType: 'input',
      elementConfig: {
          type: "time",
          min: "05:00",
          max: "21:00",
          placeholder: "enter the departure time ...",
          required: true
      },
      value: '',
      validation: {
          required: true
      },
      valid: false,
    },
    date: {
      inputType: 'input',
      elementConfig: {
          type:"date",
          min:"2018-07-01",
          max:"2020-01-01",
          placeholder:"enter the departure date...",
          required: true
      },
      value: '',
      validation: {
          required: true
      },
      valid: false,
  },
  car: {
    inputType: 'input',
    elementConfig: {
        type: 'text',
        placeholder: 'enter the car Model(vehicle type) ...',
        minLength: "3",
        required: true
    },
    value: '',
    validation: {
        required: true
    },
    valid: false,
},
slot: {
  inputType: 'input',
  elementConfig: {
      type: 'number',
      step: "1",
      min: "1",
      placeholder: "Available seats ...",
      required: true
  },
  value: '',
  validation: {
      required: true
  },
  valid: false,
},
    }
    }
    onBtnClick = (e) => {
      e.preventDefault();
        const rideData = {
          name: this.state.rideForm.name.value,
          location: this.state.rideForm.location.value,
          destination: this.state.rideForm.destination.value,
          time: this.state.rideForm.time.value,
          takeOffDate: this.state.rideForm.date.value,
          carModel: this.state.rideForm.car.value,
          slot: Number(this.state.rideForm.slot.value)
        };
        console.log(rideData);
        return this.props.createRideAction(rideData, this.props.history);
    }

    inputChangedHandler = (event, inputIdentifier) => {

            const updatedFormElement = updateObject(this.state.rideForm[inputIdentifier], {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.rideForm[inputIdentifier].validation),
            });
            const updatedOrderForm = updateObject(this.state.rideForm, {
                [inputIdentifier]: updatedFormElement
            });

            let formIsValid = true;
            for (let inputIdentifier in updatedOrderForm) {
                formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
            }
            this.setState({rideForm: updatedOrderForm, formIsValid: formIsValid});
        }
    render() {
      return (
        <div>
            <h1 style={{textAlign: 'center', color: '#bbb'}}>Create A Ride</h1>
          <Form form={this.state.rideForm} btnName="Create Ride" btnClick={this.onBtnClick} onChanged={this.inputChangedHandler}/>
        </div>
      );
  }
  }

  const mapStateToProps = state => ({
    loading: state.rides.loading
  });

  const mapDispatchToProps = dispatch => ({
    createRideAction: (data, history) => dispatch(createRide(data, history)),
  });

  export default connect(mapStateToProps, mapDispatchToProps)(NewRide);
