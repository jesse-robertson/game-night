import {connect} from 'react-redux';

import Game from './Game';
import {toggleGameDetails} from '../store/action/creators';

const s2p = ({entity:{game}, detailToggles},{id}) => ({
    game: game[id],
    showFullDetails: detailToggles[id]
});

const d2p = (dispatch, {id}) => ({
    toggleDetails: () => dispatch(toggleGameDetails(id))
});

export default connect(s2p, d2p)(Game);