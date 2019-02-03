import React, { Component } from 'react';
import TagNav from '../../components/TagNav/TagNav';
import HomeGrid from '../../components/HomeGrid/HomeGrid';

class Home extends Component {
  render() {
    return (
      <div>
          <TagNav/>
          <HomeGrid />
      </div>
    )
  }
}

export default Home;