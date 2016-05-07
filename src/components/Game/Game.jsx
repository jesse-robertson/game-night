import React from 'react';
import {Media} from 'react-bootstrap';

import GameKeywords from '../GameKeywords';
import MoreLess from '../MoreLess';

const COVER_SMALL_URL = 'http://res.cloudinary.com/igdb/image/upload/t_cover_small/';
const COVER_BIG_URL = 'http://res.cloudinary.com/igdb/image/upload/t_cover_big/';
const THUMB_URL = 'http://res.cloudinary.com/igdb/image/upload/t_thumb/';

const Game = ({
    game: {
        name ='', 
        keywords = '', 
        detail = '', 
        coverId = 'nocover_qhhlj6',
        releaseYear
    },
    showFullDetails = false,
    onClick
}) =>
    <Media className="text-left" onClick={onClick}>
        <Media.Left align="top">
            <img src={THUMB_URL+coverId} alt="Image"/>
        </Media.Left>
        <Media.Body>
            <Media.Heading>{name} ({releaseYear})</Media.Heading>
            <GameKeywords keywordString={keywords} />
            <MoreLess hideRest={!showFullDetails}>
                {detail}
            </MoreLess>
        </Media.Body>
    </Media>

export default Game;