import React, { Component } from 'react';

import Logo from './logo';
import SearchBar from './search-bar';
import RecentPosts from './recent-posts';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Logo/>
          <SearchBar/>
          <RecentPosts/>
        </div>
      </div>
    );
  }
}