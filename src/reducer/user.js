import {LOG_OUT, FACEBOOK_LOGIN_SUCCESS} from '../constants/actions.js';

import mapToReducer from '../util/mapToReducer';

const initialUser = null;

export default mapToReducer(initialUser, {
    [LOG_OUT]: user => null,
    [FACEBOOK_LOGIN_SUCCESS]: (_, action) => action.payload.user
});