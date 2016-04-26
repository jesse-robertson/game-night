import {TOGGLE_GAME_DETAILS} from '../../constants/actions';

export function toggleDetails(id) {
    return {
        type: TOGGLE_GAME_DETAILS,
        payload: {
            id
        }
    };
}