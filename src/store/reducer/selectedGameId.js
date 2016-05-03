import {SELECT_GAME} from '../action/types';
import mapToReducer from '../util/mapToReducer';

export default mapToReducer(null,{
    [SELECT_GAME] : (_,action) => action.payload.id
});