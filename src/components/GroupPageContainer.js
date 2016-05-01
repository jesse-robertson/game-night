import {connect} from 'react-redux';

import GroupPage from '../components/GroupPage';

const mapStateToProps = ({entity:{group}}) => ({group})

export default connect(mapStateToProps)(GroupPage);
