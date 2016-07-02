import React from 'react';

const Hideable = ({hide, children}) =>  <div> {hide ? null : children} </div>

export default Hideable;