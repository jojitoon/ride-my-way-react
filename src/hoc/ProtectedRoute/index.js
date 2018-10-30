import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ component: Component, isAuth, ...configs }) => (
  <Route {...configs} render={(props) => (
      isAuth
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
);
const mapStateToProps = state => ({
  isAuth: state.auth.auth
});

export default connect(mapStateToProps)(ProtectedRoute);
