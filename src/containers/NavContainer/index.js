import {connect} from 'react-redux';

import Navigation from '../../components/Navigation';
import * as mapDispatchToProps from './action-creators';

const mapStateToProps = ({user, navbar}) => ({
    showNavSections: !!user,
    name: user && user.name,
    isCollapsed: navbar.isCollapsed
});

const SmartNav = connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default SmartNav;