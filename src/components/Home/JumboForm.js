import React, {
  Component
} from 'react'
import { withRouter } from 'react-router-dom';
import classes from './style.scss';

class jumboForm extends Component {

  state = {
    username: "",
    email: ""
  }
handleChange =(e, key)=> {
  this.setState({[key]: e.target.value })
}
  render() {

    return (
      <div className={classes.form}>
      <h2>Find a ride</h2>
      <form>
        <input type="text" placeholder="Enter your username" value={this.state.username} onChange={(e) => this.handleChange(e, 'username')}/>
      <input type="text" placeholder="Enter your email" value={this.state.email} onChange={(e) => this.handleChange(e, 'email')}/>
    <input type="button"
      className={classes.btn}
      value="Join a ride"
      onClick={() => this.props.history.push(`/signup?username=${this.state.username}&email=${this.state.email}`)}/>
        <div>
          <br></br>
          <br></br>
          you would never want to go back if you join.
        </div>
      </form>
    </div>
    )
  }
}

export default withRouter(jumboForm);
