import {connect} from 'react-redux';

import Game from './Game';

import {selectGame, deselectGame} from '../../store/action/creators';

const manualConnect = (mapStateAndDispatchToProps) => connect(
    (state) => ({state}), 
    (dispatch) => ({dispatch}), 
    ({state}, {dispatch}, ownProps) => 
        Object.assign(
            {}, 
            ownProps, 
            mapStateAndDispatchToProps(state, dispatch, ownProps)
        )
);

const mapStateAndDispatchToProps = (state, dispatch, {id}) => {
    const isSelected = state.selectedGameId === id;
    const clickAction = isSelected ? deselectGame() : selectGame(id)
    return {
        game: state.entity.game[id],
        showFullDetails: isSelected,
        onClick: () => dispatch(clickAction)         
    }
}

export default manualConnect(mapStateAndDispatchToProps)(Game);