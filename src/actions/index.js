import { SET_RECENT_POSTS } from './types';

import axios from 'axios';

export function fetchRecentPosts() {
    return function(dispatch) {
        // Datos de prueba mientras la API no está disponible
        const mockPosts = [
            {
                id: 1,
                title: "Mi primer post",
                content: "Este es un post de prueba"
            },
            {
                id: 2,
                title: "Aprendiendo React",
                content: "React es una librería increíble"
            },
            {
                id: 3,
                title: "Redux en acción",
                content: "Redux nos ayuda a manejar el estado"
            }
        ];

        // Simulamos un delay como si fuera una llamada real
        setTimeout(() => {
            dispatch({
                type: SET_RECENT_POSTS,
                payload: mockPosts
            });
        }, 100);

        // Mantenemos el código original comentado para cuando la API esté disponible
        /*
        axios.get('https://api.dailysmarty.com/posts')
            .then(response => {
                dispatch({ 
                    type: SET_RECENT_POSTS, 
                    payload: response.data.posts || [] 
                });
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
                dispatch({ 
                    type: SET_RECENT_POSTS, 
                    payload: [] 
                });
            });
        */
    }
}
