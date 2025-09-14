import { SET_RECENT_POSTS,
         SET_RESULTS_POSTS
 } from './types';

import axios from 'axios';

export function fetchRecentPosts() {
    return function(dispatch) {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.map(post => {
                    return {
                        ...post,
                        associated_topics: ['React', 'JavaScript']
                    }
                });
                dispatch({
                    type: SET_RECENT_POSTS,
                    payload: posts
                })
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
                dispatch({ 
                    type: SET_RECENT_POSTS, 
                    payload: response.data.posts 
                });
            });
    }
}

export function fetchPostsWithQuery(query) {
    return function(dispatch) {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                // Filtra los posts por el query en el título o body
                const filteredPosts = response.data.filter(post => {
                    const q = query.toLowerCase();
                    return post.title.toLowerCase().includes(q) || post.body.toLowerCase().includes(q);
                }).map(post => ({
                    ...post,
                    associated_topics: ['React', 'JavaScript']
                }));
                dispatch({
                    type: SET_RESULTS_POSTS,
                    payload: filteredPosts
                });
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
                dispatch({
                    type: SET_RESULTS_POSTS,
                    payload: []
                });
            });
    }
}
