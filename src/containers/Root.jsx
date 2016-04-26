// Libs
import React from 'react';
import {Provider} from 'react-redux';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import { syncHistoryWithStore} from 'react-router-redux';

// Page Containers
import AppContainer from './AppContainer';
import GroupPageContainer from './GroupPageContainer';
import MinePageContainer from './MinePageContainer';


import configureStore from '../configure-store';
import {HOME, GROUP_RANKINGS, MY_RANKINGS} from '../constants/routes';

const initialState = {
    entity: {
        group: {
            games: ["1", "2", "3"]
        },
        game: {
            "1" : {
                name: 'A Really Cool Game',
                keywords: 'Action Adventure Awesomeness',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor est ut lacus lobortis sagittis. Nunc et ex in nulla consequat consectetur in a massa. Cras maximus, nulla quis placerat vulputate, dui magna eleifend quam, et ornare ligula sem id dui. Duis ultrices mollis justo. Morbi nec risus non justo commodo elementum. Cras consequat malesuada urna a suscipit. Quisque sed tortor ac ex fermentum auctor volutpat at tortor.',
                cover: {url:'https://upload.wikimedia.org/wikipedia/en/a/a2/Super_Smash_Bros_for_Wii_U_Box_Art.png'}
            },
            "2" : {
                name: 'A Scary Game',
                keywords: 'Horror Spoopy',
                detail: 'Aliquam facilisis ac purus vel ullamcorper. Donec sollicitudin eget tellus et vestibulum. Duis tincidunt scelerisque dui, blandit malesuada massa ornare quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque molestie magna non nulla consequat, sit amet vestibulum leo porta. Cras malesuada mattis nisi, vitae sodales est dictum vel. Maecenas lacinia nisi augue, nec placerat est pharetra quis. Sed dapibus massa felis, vel convallis diam ultrices quis. Donec eleifend, dolor quis consequat sollicitudin, odio ligula venenatis nisl, non placerat lectus urna ac nisi. Suspendisse posuere non massa sed luctus. Aenean consectetur erat tincidunt justo luctus, ac vulputate leo malesuada. Nam id finibus diam. Nulla fringilla tortor quis nunc rutrum dapibus et at orci. Fusce et quam eu dolor tincidunt commodo non eget lacus.',
                cover: {url:'https://upload.wikimedia.org/wikipedia/en/5/58/Resident_Evil_5_Box_Artwork.jpg'}
            },
            "3" : {
                name: 'A Scary Game',
                keywords: 'Horror Spoopy',
                detail: 'Morbi et lorem eget urna sodales dapibus et nec diam. Sed pharetra lacus eget scelerisque varius. Fusce nec diam at risus placerat tristique. Nunc sodales a nisi vitae consectetur. Curabitur egestas metus sed est egestas, sit amet consequat turpis imperdiet. Donec vitae faucibus magna. Mauris sem nisl, laoreet in aliquam non, blandit quis orci. Nullam ipsum justo, cursus nec maximus quis, tincidunt id libero.',
                cover: {url:'https://upload.wikimedia.org/wikipedia/en/5/58/Resident_Evil_5_Box_Artwork.jpg'}
            }
        }
    }
};
const store = configureStore(initialState, browserHistory);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

const Root = () => 
    <Provider store = { store }>
        <Router history = { history }>
          <Route path = {HOME} component = { AppContainer }>
            <IndexRoute component = { GroupPageContainer }/>
            <Route path = {GROUP_RANKINGS} component = { GroupPageContainer } />
            <Route path = {MY_RANKINGS}   component = { MinePageContainer } />
          </Route>
        </Router>
    </Provider>;

export default Root;