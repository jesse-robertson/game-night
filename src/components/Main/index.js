import {connect} from 'react-redux';
import Main from './Main';

const mapStateToProps = ({entity:{group}}) => ({group})

export default connect(mapStateToProps)(Main);
