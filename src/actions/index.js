import { SET_RECENT_POSTS } from './types';

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
                    payload: [] 
                });
            });
    }
}

export function fetchPostsWhithQuery(query) {
    return function(dispatch) {
        axios.get(`https://jsonplaceholder.typicode.com/search?q=${query}`)
            .then(response => {
                console.error('response.data.posts');
                //dispatch({ 
                   // type: SET_RECENT_POSTS, 
                    //payload: [] 
               // });
            });
    }
}
