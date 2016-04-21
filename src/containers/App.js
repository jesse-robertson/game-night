import React from 'react';
import {connect} from 'react-redux';
//import * as actionCreators from '../actions/action-creators';
//import Counter from '../components/Counter';

export default class App extends React.Component {
    render() {
        return (
            <div>
               <h1>Well isn't this just awesome?</h1> 
            </div>
        );  
    } 
}

// const mapStateToProps = state => ({
//     count: state.count 
// });

// export default connect(mapStateToProps, actionCreators)(App);


/*

<Counter count = {count} 
                         increment = {increment} 
                         decrement = {decrement} />


*/