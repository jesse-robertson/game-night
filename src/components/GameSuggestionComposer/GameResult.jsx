import React from 'react';

import {Media} from 'react-bootstrap';

const MICRO_URL = '//res.cloudinary.com/igdb/image/upload/t_micro/';

const GameResult = ({
    game: {
        name,
        coverId = 'nocover_qhhlj6',
        releaseYear
    }
}) =>
    <Media className="text-left">
        <Media.Left align="top">
            <img src={MICRO_URL+coverId} />
        </Media.Left>
        <Media.Body>
            {name}
            <br />
             ({releaseYear})
        </Media.Body>
    </Media>
        
export default GameResult; 