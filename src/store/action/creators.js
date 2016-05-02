import {
    FACEBOOK_LOGIN_SUCCESS, 
    FACEBOOK_LOGIN_FAILURE,
    TOGGLE_GAME_DETAILS,
    TOGGLE_NAVBAR,
    LOG_OUT,
    SEARCH_CHOOSE,
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_CLEAR
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

export const toggleGameDetails = (id) => ({
    type: TOGGLE_GAME_DETAILS,
    payload: { id }
});
    
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
