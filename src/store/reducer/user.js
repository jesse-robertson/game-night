import {LOG_OUT, FACEBOOK_LOGIN_SUCCESS} from '../action/types';

import mapToReducer from '../util/mapToReducer';

const initialUser = null;

export default mapToReducer(initialUser, {
    [LOG_OUT]: user => null,
    [FACEBOOK_LOGIN_SUCCESS]: (_, {payload:{user}}) => user
});