import { 
    SEARCH_SUCCESS,
    SEARCH_QUERY_CHANGE
} from '../action/types';

import mapToReducer from '../util/mapToReducer';

const init = {
    chosen: null,
    query: '',
    cache: {}
};

export default mapToReducer(init, {
    [SEARCH_QUERY_CHANGE]: (search, {payload:{query}}) => 
        Object.assign({},search,{query}),
        
    [SEARCH_SUCCESS]: (search,{payload:{query,results}}) => {
        const cache = Object.assign({}, search.cache, {[query]:results});
        return Object.assign({},search,{cache}); 
    }
});