import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

const CenteredPagewide = ({children}) => 
    <Grid>
        <Row>
            <Col sm = {12} className='text-center'>
                {children}
            </Col>
        </Row>
    </Grid>;
    
export default CenteredPagewide;