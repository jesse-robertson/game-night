import GameSuggestionComposer from './GameSuggestionComposer';
import advancedConnect from '../../store/util/advancedConnect';
import {searchQueryChange, suggestGame, searchRequest} from '../../store/action/creators';

const mapStateAndDispatchToProps = ({entity,search:{cache,query}}, dispatch) => ({
    query,
    results: cache[query] || [],
    choose: (id) => dispatch(suggestGame(id)),
    queryChange: ({target:{value}}) => {
        dispatch(searchQueryChange(value))
        if (value && !cache[value]) {
            dispatch(searchRequest(value));
        }
    } 
});

export default advancedConnect(mapStateAndDispatchToProps)(GameSuggestionComposer);