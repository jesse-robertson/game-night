import {TOGGLE_NAVBAR, LOCATION_CHANGE, FACEBOOK_LOGIN_SUCCESS} from '../action/types';
import mapToReducer from '../util/mapToReducer';

const initialNavbar = {
    isCollapsed: true
};

export default mapToReducer(initialNavbar, {
    [TOGGLE_NAVBAR]  : navbar => Object.assign({},navbar,{isCollapsed: !navbar.isCollapsed}),
    [LOCATION_CHANGE]: navbar => Object.assign({},navbar,{isCollapsed: true})
});