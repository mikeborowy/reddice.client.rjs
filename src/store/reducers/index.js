/**
 * 1.3 Combine All Store Reducers
 */
import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
/*
the given name exported of reducers here will be use thru 
components as 
*/
import { ajaxCallsInProgress } from './ajaxCallReducer';

// const allAppReducers = function(state, action){
//     return{
//         ajaxCallsInProgress: ajaxCallsInProgress(state, action),
//         cards: cardReducer(state, action)
//     }
// }

const allAppReducers = combineReducers({
    // routing: routerReducer,
    ajaxCallsInProgress, //shorthand property name accesible in store
});

export default allAppReducers;