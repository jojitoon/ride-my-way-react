import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearMessages } from 'Store/actions/message';
import classes from './style.scss';

const Message = (props) => {
  const { error, message } = props;
  return (
    <div className={classes.message}>{ error && <div className={classes.popupError}>
      <h2>Error</h2>
        <a className={classes.close} onClick={props.clearMessagesAction}>&times;</a>
          <div className={classes.content}>
            {error}
          </div>
        </div>
      }
      { message && <div className={classes.popup}>
        <h2>Message</h2>
          <a className={classes.close} onClick={props.clearMessagesAction}>&times;</a>
            <div className={classes.content}>
              { message }
            </div>
          </div>
        }
  </div>
  );
};

Message.propTypes = {
  error: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  clearMessagesAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  error: state.message.error,
  message: state.message.message
});

const mapDispatchToProps = dispatch => ({
  clearMessagesAction: () => dispatch(clearMessages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
