import React from 'react';
import {Row, Col, FormControl, Table} from 'react-bootstrap';

const GameSuggestionComposer = ({search, results, choose}) =>
    <Row>
        <Col className='text-center' md={4} mdOffset={4} xs={12}>
            <h2>What Should We Play?</h2>
            <form>
                <FormControl type="text" 
                             placeholder="Suggest a game!" 
                             onChange={ (e) => search(e.target.value) }
                             onBlur={(e) => {e.target.value=''}}/>
            </form>
            <Table hover>
                <tbody>
                    {results.map( ({id, name}) =>
                        <tr key={id} onClick={choose(id)}><td>{name}</td></tr>
                    )}    
                </tbody>
            </Table>
            
        </Col>
    </Row>
    
export default GameSuggestionComposer;