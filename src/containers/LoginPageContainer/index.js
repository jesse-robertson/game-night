import {connect} from 'react-redux';
import LoginPage from '../../components/LoginPage';
import * as mapDispatchToProps from './action-creators';

export default connect(
    null,
    mapDispatchToProps
)(LoginPage);