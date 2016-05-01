import {connect} from 'react-redux';
import {push}    from 'react-router-redux';

import {HOME, GROUP_RANKINGS, MY_RANKINGS} from '../Routes';
import Navigation from './Navigation';
import {logOut, toggleNavbar} from '../../store/action/creators';

const s2p = ({user, navbar}) => ({
    showNavSections: !!user,
    name: user && user.name,
    isCollapsed: navbar.isCollapsed,
    showHamburger: !!user
});

const d2p = {
    logOut,
    hamburgerClick     : toggleNavbar,
    headerClick        : () => push(HOME),
    groupRankingsClick : () => push(GROUP_RANKINGS),
    myRankingsClick    : () => push(MY_RANKINGS)
};

export default connect(s2p, d2p)(Navigation);