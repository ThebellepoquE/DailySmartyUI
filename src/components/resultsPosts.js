import React, { Component } from 'react';

import { connect } from 'react-redux';

class ResultsPosts extends Component {
    renderPosts() {
        const posts = this.props.posts.map((post, index) => {
            return <Post key={index} {...post}/>
        })
        return posts;
    }
    render() {
        return (
            <div className="results-posts">
                <div className="results-posts__wrapper">
                    <ul className="results-posts__posts">
                        {this.renderPosts()}
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { state };
}

export default connect(mapStateToProps)(ResultsPosts);