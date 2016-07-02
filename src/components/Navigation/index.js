import {connect} from 'react-redux';
import Navigation from './Navigation';
import {logOut} from '../../store/action/creators';


const mapStateToProps = ({user}) => ({showLogOut: user})
    

export default connect(mapStateToProps,{logOut})(Navigation);