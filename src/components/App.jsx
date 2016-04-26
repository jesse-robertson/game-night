import React from 'react';

import NavContainer from '../containers/NavContainer';
import Footer from './Footer';
import LoginPageContainer from '../containers/LoginPageContainer';

const App = ({children, showLoginInstead}) => 
    <div>
        <NavContainer />
        {showLoginInstead ? <LoginPageContainer /> : children}
        <Footer />
    </div>;
    
export default App;