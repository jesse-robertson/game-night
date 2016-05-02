import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import GameList from './GameList';
import GameSuggestionComposer from './GameSuggestionComposer';

const GroupPage = ({group}) => 
    <Grid>
        <GameSuggestionComposer />
        <Row>
            <Col className='text-center' md={5} mdOffset={1} xs={12}>
                <h2>Group Results!</h2>
                {group && group.games ? <GameList games={group.games} /> : null}
            </Col> 
            <Col className='text-center' md={3} mdOffset={1} xs={12}>
                <h3>Wall of Shame</h3>
            </Col>
        </Row>
    </Grid>

export default GroupPage;

