import React, { Component } from 'react';

import Columns from '../../components/Home/Columns';
import Jumbo from '../../components/Home/Jumbo';

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbo />
        <Columns />
      </div>
    );
  }
}

export default Home;
