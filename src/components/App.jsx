import React from 'react';

import Navigation from './Navigation';
import Login      from './Login';
import Footer     from './Footer';

const App = ({children, showLoginInstead}) => 
    <div>
        <Navigation />
        {showLoginInstead ? <Login /> : children}
        <Footer />
    </div>;
    
export default App;