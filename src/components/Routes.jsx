import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

// Get Route Constants
export const HOME = '/';
export const GROUP_RANKINGS = '/group';
export const MY_RANKINGS = '/mine';

// Page Containers
import App       from './AppContainer';
import GroupPage from './GroupPageContainer';
import UserPage  from './UserPageContainer';

const Routes = ({store}) => 
     <Router history = { syncHistoryWithStore(browserHistory, store) }>
      <Route path = {HOME} component = { App }>
        <IndexRoute component = { GroupPage }/>
      </Route>
    </Router>
    
export default Routes;


/** maybe later:
 <Route path = {GROUP_RANKINGS} component = { GroupPage } />
        <Route path = {MY_RANKINGS}   component = { UserPage } />
 */