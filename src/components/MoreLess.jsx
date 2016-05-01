import React from 'react';

import Hideable from './Hideable';

const MoreLess = ({abbreviatedLength=37, hideRest=true, onToggle, children}) => 
    <div onClick={onToggle}>
        {hideRest ? children.substring(0, abbreviatedLength)+'...':children}
    </div>
    
export default MoreLess;