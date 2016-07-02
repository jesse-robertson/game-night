import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import GameList from '../GameList';
import GameSuggestionComposer from '../GameSuggestionComposer';

const Main = ({group={
    games:[]
}}) => 
    <Grid>
        <GameSuggestionComposer />
        <GameList games={group.games} />
    </Grid>

export default Main;