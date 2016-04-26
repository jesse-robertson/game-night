import {connect} from 'react-redux';
import GameWithThumbnail from '../../components/GameWithThumbnail';
import * as actions from './action-creators';

const mapStateToProps = ({entity:{game}, detailToggles},{id}) => ({
    game: game[id],
    showFullDetails: detailToggles[id]
});

const mapStuff = actions => (dispatch, {id}) => {
    const actionProps = {};
    
    Object.getOwnPropertyNames(actions).forEach(actionName => {
        actionProps[actionName] = () => dispatch(actions[actionName](id));
    });
    
    return actionProps;
};

export default connect(
    mapStateToProps,
    mapStuff(actions)
)(GameWithThumbnail);