import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions';

class RecentPosts extends Component {

    componentDidMount() {
        this.props.fetchRecentPosts();
    }

    renderPosts = function() {
        if (!this.props.recentPosts) return [];
        const posts = this.props.recentPosts.map((post, index) => {
            if (!post) return null;
            return (
                <li key={index}>
                    {post.title}
                </li>
            )
        });
        return posts;
    }

    render() {
        console.log("RecentPosts props:", this.props);
        return (
            <div className="recent-posts">
                <ul className="recent-posts__posts">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { 
        recentPosts: state.posts.recentPosts
    };
}

export default connect(mapStateToProps, actions)(RecentPosts);