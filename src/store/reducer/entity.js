import mapToReducer from '../util/mapToReducer';
import {REFRESH_ENTITY} from '../action/types';

export default mapToReducer({}, {
    [REFRESH_ENTITY]: (_entity, {payload:{entity}}) => Object.assign({}, _entity, entity)
})