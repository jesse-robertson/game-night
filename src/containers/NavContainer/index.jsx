import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import Navigation from '../../components/Navigation';

const mapStateToProps = ({user}) => ({
    showNavSections: !!user,
    name: user && user.name
});

const mapPropRoutesToPush = (routeMap) => {
    let map = {};
    Object.getOwnPropertyNames(routeMap).forEach( prop => {
        map[prop] = () => push(routeMap[prop]);
    });
    return map;
};

const mapDispatchToProps = mapPropRoutesToPush({
    headerClick: '/group',
    myRankingsClick: '/mine',
    groupRankingsClick: '/group',
    logout: '/login'
});

const SmartNav = connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default SmartNav;