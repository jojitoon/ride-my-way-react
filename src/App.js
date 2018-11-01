import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Aux from 'Hoc/Aux';
import Home from 'Containers/Home/Home';
import Message from 'Components/Message';
import SideNav from 'Components/sideNav';
import NotFound from 'Containers/NotFound/NotFound';
import Async from 'Hoc/AsyncComponent';
import ProtectedRoute from 'Hoc/ProtectedRoute';

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
          <Message />
        <SideNav />
        <Switch>
          <Redirect from="/rides" to="/dashboard/rides"/>
          <Route path="/signin" component={asyncSignIn}/>
          <Route path="/signup" component={asyncSignUp}/>
          <ProtectedRoute path="/dashboard" component={asyncDashboard}/>
          <ProtectedRoute path="/profile" component={asyncProfile}/>
          <Route path="/" exact component={Home}/>
          <Route component={NotFound}/>
        </Switch>
      </Aux>
      </BrowserRouter>
    );
  }
}

export default App;
