import React from 'react';

import Hideable from './Hideable';


const getHtml = (hideRest, children, abbreviatedLength) => {
   const whatever = hideRest ? children.substring(0, abbreviatedLength)+'...':children;
    return {__html: whatever}
}

const MoreLess = ({abbreviatedLength=37, hideRest=true, onToggle, children}) => 
    <div onClick={onToggle}
         dangerouslySetInnerHTML = {getHtml(hideRest, children, abbreviatedLength)} >
    </div>
    
export default MoreLess;