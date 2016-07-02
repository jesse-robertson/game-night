import React from 'react';
import CenteredPagewide from './common/CenteredPagewide';

const Footer = () => 
    <CenteredPagewide>
        <hr />
        <span>
            &copy; Jesse Robertson {new Date().getFullYear()}
        </span>
    </CenteredPagewide>;
    
export default Footer;