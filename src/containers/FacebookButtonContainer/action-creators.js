import {FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAILURE} from '../../constants/actions';

function facebookLoginSuccess(name) {
    return {
        type: FACEBOOK_LOGIN_SUCCESS,
        payload: {
            user: {
                name
            }
        }
    };
}


function facebookLoginFailure(error) {
    console.log(error);
     return {
        type: FACEBOOK_LOGIN_FAILURE,
        payload: {
            error: error.message
        }
    };    
}

export function onSubmit(err, user) {
    
    if (err) return facebookLoginFailure(err);
    
    return facebookLoginSuccess(user.profile.first_name);
}