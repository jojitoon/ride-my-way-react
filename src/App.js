import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Aux from 'Hoc/Aux';
import Home from 'Containers/Home/Home';
import NotFound from 'Containers/NotFound/NotFound';
import Async from 'Hoc/AsyncComponent';

const asyncSignIn = Async(() => {
  return import('Containers/SignIn/SignIn');
});

const asyncSignUp = Async(() => {
  return import('Containers/SignUp/SignUp');
});

const asyncDashboard = Async(() => {
  return import('Containers/Dashboard/Dashboard');
});
const asyncProfile = Async(() => {
  return import('Containers/Profile/Profile');
});
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Aux>
        <Switch>
          <Redirect from="/rides" to="/dashboard/rides"/>
          <Route path="/about" component={Home}/>
          <Route path="/signin" component={asyncSignIn}/>
          <Route path="/signup" component={asyncSignUp}/>
          <Route path="/dashboard" component={asyncDashboard}/>
          <Route path="/profile" component={asyncProfile}/>
          <Route path="/" exact component={Home}/>
          <Route component={NotFound}/>
        </Switch>
      </Aux>
      </BrowserRouter>
    );
  }
}

export default App;
