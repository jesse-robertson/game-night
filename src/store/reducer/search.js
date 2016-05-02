import {
    SEARCH_CHOOSE, 
    SEARCH_REQUEST, 
    SEARCH_SUCCESS
} from '../action/types';

import mapToReducer from '../util/mapToReducer';

const init = {
    chosen: null,
    query: '',
    cache: {}
};

export default mapToReducer(init, {
    [SEARCH_REQUEST]: (search, {payload:{query}}) => 
        Object.assign({},search,{query}),
        
    [SEARCH_CHOOSE]: (search,{payload:{id}}) => 
        Object.assign({},search,{chosen:id}),
        
    [SEARCH_SUCCESS]: (search,{payload:{query,results}}) => {
        
        const cache = Object.assign({}, search.cache, {[query]:results});
        
        return Object.assign({},search,{cache}); 
    }
});