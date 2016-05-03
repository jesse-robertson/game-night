import GameSuggestionComposer from './GameSuggestionComposer';

import {connect} from 'react-redux';
import {searchQueryChange, selectGame, searchRequest} from '../../store/action/creators';

const s2p = ({search:{cache,query}}) => ({
    query,
    cache,
});

const d2p = (dispatch, ownProps) => ({
    queryChange: (cache) => (query) => {
        dispatch(searchQueryChange(query))
        if (query && !cache[query]) {
            dispatch(searchRequest(query));
        }
    },
    choose: (id) => dispatch(selectGame(id))
});

const merge = (stateProps, dispatchProps, ownProps) => 
    Object.assign({}, ownProps, stateProps, dispatchProps, {
       queryChange: dispatchProps.queryChange(stateProps.cache)
    });

export default connect(s2p, d2p, merge)(GameSuggestionComposer);