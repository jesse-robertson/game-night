import React from 'react';

import NavContainer from '../containers/NavContainer';
import Footer from './Footer';
import LogIn from '../pages/LogIn';

const App = ({children, showLoginInstead}) => 
    <div>
        <NavContainer />
        {showLoginInstead ? <LogIn /> : children}
        <Footer />
    </div>;
    
export default App;