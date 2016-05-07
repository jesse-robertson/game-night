import advancedConnect from '../../store/util/advancedConnect';

import Game from './Game';

import {selectGame, deselectGame} from '../../store/action/creators';

const mapStateAndDispatchToProps = (state, dispatch, {id}) => {
    const isSelected = state.selectedGameId === id;
    const clickAction = isSelected ? deselectGame() : selectGame(id)
    return {
        game: state.entity.game[id],
        showFullDetails: isSelected,
        onClick: () => dispatch(clickAction)         
    }
}

export default advancedConnect(mapStateAndDispatchToProps)(Game);