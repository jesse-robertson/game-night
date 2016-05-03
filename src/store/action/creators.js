import {
    FACEBOOK_LOGIN_SUCCESS, 
    FACEBOOK_LOGIN_FAILURE,
    SELECT_GAME,
    TOGGLE_NAVBAR,
    LOG_OUT,
    SEARCH_CHOOSE,
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_QUERY_CHANGE
} from './types';

export function facebookLoginSuccess(name) {
    return {
        type: FACEBOOK_LOGIN_SUCCESS,
        payload: {
            user: {
                name
            }
        }
    };
}

export function facebookLoginFailure(error) {
    console.error(error);
     return {
        type: FACEBOOK_LOGIN_FAILURE,
        payload: {
            error: error.message
        }
    };    
}

export const selectGame = (id) => ({
    type: SELECT_GAME,
    payload: { id }
});

export const deselectGame = () => selectGame(null);
    
export function logOut() {
    return { type: LOG_OUT };
}

export function toggleNavbar() {
    return { type: TOGGLE_NAVBAR };
}


// Search Action Creators
export const searchRequest = (query) => ({
    type: SEARCH_REQUEST,
    payload: { query },
    meta: { remote: true }
});
export const searchSuccess = (query, results) => ({
    type: SEARCH_SUCCESS,
    payload: {query, results}
});
export const searchChoose = (id) => ({
    type: SEARCH_CHOOSE,
    payload: { id }
});
export const searchQueryChange = (query) => ({
    type: SEARCH_QUERY_CHANGE,
    payload: {query}
});
