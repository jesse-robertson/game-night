import {LOG_OUT} from '../constants/actions.js';

import mapToReducer from './mapToReducer';

const initialUser = null;

export default mapToReducer(initialUser, {
    [LOG_OUT]: user => null
});