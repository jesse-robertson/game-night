import {
    FACEBOOK_LOGIN_SUCCESS, 
    FACEBOOK_LOGIN_FAILURE,
    TOGGLE_GAME_DETAILS,
    TOGGLE_NAVBAR,
    LOG_OUT
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

export function toggleGameDetails(id) {
    return {
        type: TOGGLE_GAME_DETAILS,
        payload: {
            id
        },
        meta: {
            remote:true
        }
    };
}

export function logOut() {
    return { type: LOG_OUT };
}

export function toggleNavbar() {
    return { type: TOGGLE_NAVBAR };
}