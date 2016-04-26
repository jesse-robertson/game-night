import React from 'react';
import {Label} from 'react-bootstrap';

const GameKeywords = ({keywordString}) =>
    <span>
        {keywordString.split(' ').map( keyword => 
            <span key={keyword}>
                <Label bsStyle="success">{keyword}</Label>
                &nbsp;
            </span> )}
    </span>
    
    
export default GameKeywords;