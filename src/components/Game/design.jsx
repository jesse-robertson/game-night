import React from 'react';
import {Media} from 'react-bootstrap';

import GameKeywords from '../GameKeywords';
import MoreLess from '../MoreLess';

const Game = ({
    game: {
        name, 
        keywords, 
        detail, 
        cover
    },
    showFullDetails = false,
    toggleDetails
}) =>
    <Media className="text-left" onClick={toggleDetails}>
        <Media.Left align="top">
            <img width={46} height={64} src={cover} alt="Image"/>
        </Media.Left>
        <Media.Body>
            <Media.Heading>{name}</Media.Heading>
            <GameKeywords keywordString={keywords} />
            <MoreLess hideRest={!showFullDetails}>
                {detail}
            </MoreLess>
        </Media.Body>
    </Media>

export default Game;