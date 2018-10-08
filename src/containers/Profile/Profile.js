import React, { Component } from 'react';
import ProfileContent from 'Components/ProfileContent/Profile';

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileContent
        ridesTaken={2}
        ridesGiven={3}
        ridesReqReceived={2}
        ridesReqSent={0}
        />
      </div>
    );
  }
}

export default Profile;
