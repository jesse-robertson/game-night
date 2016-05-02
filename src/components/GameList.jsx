import React from 'react';
import {Table} from 'react-bootstrap';
import Game from './Game';

const gameIdToTableRow = (id) => 
    <tr key={id}>
        <td>
            <Game id={id} /> 
        </td>
    </tr>

const GameList = ({games}) =>
    <Table hover>
        <tbody>
            { games.map(gameIdToTableRow) }        
        </tbody>
    </Table> 
    
export default GameList;