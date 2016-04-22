import {connect} from 'react-redux';

import App from '../components/App';

const mapStateToProps = ({user}) => ({
    showLoginInstead: !user
});

export default connect(mapStateToProps)(App);
