import React from 'react';
import {Row, Col, FormControl, Table} from 'react-bootstrap';

import GameResult from './GameResult';

const GameSuggestionComposer = ({query, queryChange, results, choose}) =>
    <Row>
        <Col className='text-center' md={4} mdOffset={4} xs={12}>
            <h2>whatever!</h2>
            <form>
                <FormControl    type="text"
                                value={query} 
                                placeholder="Suggest a game!" 
                                onChange={queryChange} />
            </form>
            <Table hover>
                <tbody>
                    {results.map( (game) =>
                        <tr key={game.id} onClick={() => choose(game.id)}>
                            <td>
                                <GameResult game={game} />
                            </td>
                        </tr>
                    )}    
                </tbody>
            </Table>
            
        </Col>
    </Row>
    
export default GameSuggestionComposer;