import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classes from './style.scss';
import changeNav from '../../store/actions/nav';

const Icon = (props) => {
  return (
    <div className={classes.container} onClick={props.openNav}>
  <div className={classes.bar1}></div>
<div className={classes.bar2}></div>
  <div className={classes.bar3}></div>
</div>
  )
}
const mapDispatchToProps = dispatch => ({
  openNav: ()=>dispatch(changeNav())
});
export default connect(null, mapDispatchToProps)(Icon);
