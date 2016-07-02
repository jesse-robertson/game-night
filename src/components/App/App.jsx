import React from 'react';
import Navigation from '../Navigation';
import Login      from '../Login';
import Main       from '../Main';
import Footer     from '../Footer';

const App = ({showLoginInstead}) => 
    <div>
        <Navigation />
        {showLoginInstead ? <Login /> : <Main />}
        <Footer />
    </div>;
    
export default App;