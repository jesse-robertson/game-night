import React from 'react';
import {Row, Col, FormControl, Table} from 'react-bootstrap';

const GameSuggestionComposer = ({query, queryChange, cache, choose}) =>
    <Row>
        <Col className='text-center' md={4} mdOffset={4} xs={12}>
            <h2>What Should We Play?</h2>
            <form>
                <FormControl type="text"
                             value={query} 
                             placeholder="Suggest a game!" 
                             onChange={ (e) => queryChange(e.target.value) }
                             />
            </form>
            <Table hover>
                <tbody>
                    {(cache[query]||[]).map( ({id, name}) =>
                        <tr key={id} onClick={() => choose(id)}><td>{name}</td></tr>
                    )}    
                </tbody>
            </Table>
            
        </Col>
    </Row>
    
export default GameSuggestionComposer;