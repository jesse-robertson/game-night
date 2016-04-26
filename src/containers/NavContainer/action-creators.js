import {push} from 'react-router-redux';
import {HOME, GROUP_RANKINGS, MY_RANKINGS} from '../../constants/routes';
import {TOGGLE_NAVBAR, LOG_OUT} from '../../constants/actions';

export function headerClick() {
    return push(HOME);
}

export function groupRankingsClick() {
    return push(GROUP_RANKINGS);
}

export function myRankingsClick() {
    return push(MY_RANKINGS);
}

export function logout() {
    return { type: LOG_OUT };
}

export function hamburgerClick() {
    return { type: TOGGLE_NAVBAR };
}