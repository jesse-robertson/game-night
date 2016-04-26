import {connect} from 'react-redux';

import GroupPage from '../components/GroupPage';

const mapStateToProps = ({entity:{group:{games}}}) => ({games})

export default connect(mapStateToProps)(GroupPage);
