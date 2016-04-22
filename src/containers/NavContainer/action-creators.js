import {push} from 'react-router-redux';

import {TOGGLE_NAVBAR, LOG_OUT} from '../../constants/actions';

export function headerClick() {
    return push('/');
}

export function groupRankingsClick() {
    return push('/group');
}

export function myRankingsClick() {
    return push('/mine');
}

export function logout() {
    return {
        type: LOG_OUT  
    };
}

export function hamburgerClick() {
    return {
        type: TOGGLE_NAVBAR
    };
}