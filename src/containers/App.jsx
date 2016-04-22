import React from 'react';

import NavContainer from './NavContainer';
import Footer from '../components/Footer';

const App = ({children}) => 
    <div>
        <NavContainer />
        {children}
        <Footer />
    </div>;
    
export default App;