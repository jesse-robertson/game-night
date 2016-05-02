import {connect} from 'react-redux';
import {searchRequest, searchChoose} from '../../store/action/creators';

const s2p = ({search:{cache,query}}) => ({
    results: cache[query] || []
});

const d2p = (dispatch, ownProps) => ({
    search: (query) => dispatch(searchRequest(query)),
    choose: (id) => dispatch(searchChoose(id))
});

export default connect(s2p, d2p);