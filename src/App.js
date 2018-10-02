import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar/Navbar';
import Aux from './hoc/Aux';
import Home from './containers/Home/Home';
import SignIn from './containers/SignIn/SignIn';
import SignUp from './containers/SignUp/SignUp';
import NotFound from './containers/NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Aux>
      <NavBar />
        <Switch>
          <Route path="/rides" component={Home}/>
          <Route path="/about" component={Home}/>
          <Route path="/signIn" component={SignIn}/>
          <Route path="/signUp" component={SignUp}/>
          <Route path="/" exact component={Home}/>
          <Route component={NotFound}/>
        </Switch>
      </Aux>
      </BrowserRouter>
    );
  }
}

export default App;
