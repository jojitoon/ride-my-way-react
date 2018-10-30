import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfile } from 'Store/actions/user';
import ProfileContent from 'Components/ProfileContent/Profile';
import Loader from 'Components/Loader';

class Profile extends Component {

    componentDidMount(){
      this.props.getProfileAction();
    }
  render() {
    return (
      <div>
        {this.props.loading ? <Loader /> : <ProfileContent />}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.user.loading
});


const mapDispatchToProps = dispatch => ({
  getProfileAction: () => dispatch(getProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
