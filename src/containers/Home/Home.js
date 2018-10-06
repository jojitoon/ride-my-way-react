import React, { Component } from 'react';

import Columns from 'Components/Home/Columns';
import Jumbo from 'Components/Home/Jumbo';
import NavBar from 'Components/NavBar/Navbar';

class Home extends Component {
  render() {
    return (
      <div>
      <NavBar />
        <Jumbo />
        <Columns />
      </div>
    );
  }
}

export default Home;
