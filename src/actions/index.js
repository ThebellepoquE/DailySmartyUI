import { SET_RECENT_POSTS,
         SET_RESULTS_POSTS
 } from './types';

import axios from 'axios';

export function fetchRecentPosts() {
    return function(dispatch) {
        console.log('[fetchRecentPosts] Lanzando petición a la API...');
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log('[fetchRecentPosts] response:', response);
                console.log('[fetchRecentPosts] response.data:', response.data);
                dispatch({
                    type: SET_RECENT_POSTS,
                    payload: response.data
                });
            })
            .catch(error => {
                console.error('[fetchRecentPosts] ERROR:', error);
                if (error.response) {
                    console.error('Error response:', error.response);
                } else if (error.request) {
                    console.error('Error request:', error.request);
                } else {
                    console.error('Error message:', error.message);
                }
                // Datos mock locales
                const mockPosts = [
                  { id: 1, title: 'Post de ejemplo 1', body: 'Este es un post de ejemplo.', associated_topics: ['React', 'JavaScript'] },
                  { id: 2, title: 'Post de ejemplo 2', body: 'Otro post de ejemplo para pruebas.', associated_topics: ['Redux'] },
                  { id: 3, title: 'Post de ejemplo 3', body: 'Más contenido de ejemplo.', associated_topics: ['API', 'Frontend'] }
                ];
                dispatch({
                    type: SET_RECENT_POSTS,
                    payload: mockPosts
                });
            });
    }
}

export function fetchPostsWithQuery(query, callback) {
    return function(dispatch) {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                // Filtra los posts por el query en el título o body
                const filteredPosts = response.data.filter(post => {
                    const q = query.toLowerCase();
                    return post.title.toLowerCase().includes(q) || post.body.toLowerCase().includes(q);
                });
                console.log('[fetchPostsWithQuery] filteredPosts:', filteredPosts);
                dispatch({
                    type: SET_RESULTS_POSTS,
                    payload: filteredPosts
                });
                if(callback) { callback(); }
            })
            .catch(error => {
                console.error('[fetchPostsWithQuery] ERROR:', error);
                // Datos mock locales filtrados
                const mockPosts = [
                  { id: 1, title: 'Post de ejemplo 1', body: 'Este es un post de ejemplo.', associated_topics: ['React', 'JavaScript'] },
                  { id: 2, title: 'Post de ejemplo 2', body: 'Otro post de ejemplo para pruebas.', associated_topics: ['Redux'] },
                  { id: 3, title: 'Post de ejemplo 3', body: 'Más contenido de ejemplo.', associated_topics: ['API', 'Frontend'] }
                ];
                const filteredMock = mockPosts.filter(post => {
                  const q = query.toLowerCase();
                  return post.title.toLowerCase().includes(q) || post.body.toLowerCase().includes(q);
                });
                dispatch({
                    type: SET_RESULTS_POSTS,
                    payload: filteredMock
                });
                if(callback) { callback(); }
            });
    }
}
