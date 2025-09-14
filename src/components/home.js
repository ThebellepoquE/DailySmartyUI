import React, { Component } from 'react';

import Logo from './logo';
import SearchBar from './search-bar';
import RecentPosts from './recent-posts';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {

  handleSearchBarSubmit(query) {
    console.log('[Home] handleSearchBarSubmit called with:', query);
    this.props.fetchPostsWithQuery(query);
    if (this.props.history) {
      console.log('[Home] history.push is available, navigating to /results');
      this.props.history.push(`/results`);
    } else {
      console.warn('[Home] history prop is missing! Navigation will not work.');
    }
  }

  render() {
    return (
      <div>
        <div>
          <Logo/>
          <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
          <RecentPosts/>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Home);