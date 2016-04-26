import React from 'react';
import {Media} from 'react-bootstrap';

import GameKeywords from './GameKeywords';
import MoreLess from './MoreLess';

const GameWithThumbnail = ({
    game: {
        name, 
        keywords, 
        detail, 
        cover: {
            url
        }
    },
    showFullDetails = false,
    toggleDetails
}) =>
    <Media className="text-left">
        <Media.Left align="top">
            <img width={46} height={64} src = {url} alt="Image"/>
        </Media.Left>
        <Media.Body>
            <Media.Heading>{name}</Media.Heading>
            <GameKeywords keywordString={keywords} />
            <MoreLess hideRest={!showFullDetails} onToggle={toggleDetails}>{detail}</MoreLess>
        </Media.Body>
    </Media>

export default GameWithThumbnail;