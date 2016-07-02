import React from 'react';

const Show = ({show, children}) => show ? children : null;  

export default Show;