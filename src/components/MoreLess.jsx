import React from 'react';

import Hideable from './Hideable';

const MoreLess = ({abbreviatedLength=30, hideRest=true, onToggle, children}) => 
    <div>
        <Hideable hide={!hideRest} >
            {children.substring(0,abbreviatedLength)}
            <a onClick={onToggle}>{'... show more'} </a>
        </Hideable>
        <Hideable hide={hideRest} >
            {children}
            <a onClick={onToggle}>{' show less'} </a>
        </Hideable>
    </div>
    
export default MoreLess;