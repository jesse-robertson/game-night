import React from 'react';

import {Table} from 'react-bootstrap';

import GameContainer from '../containers/GameContainer';

const GameList = ({games}) =>
    <Table hover>
        <tbody>
            {
                games.map( gameId => 
                    <tr key = {gameId}>
                        <td>
                            <GameContainer id = { gameId } /> 
                        </td>
                    </tr>
                ) 
            }        
        </tbody>
    </Table> 
    
export default GameList;