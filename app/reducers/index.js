import { combineReducers } from 'redux';
import GenreReducer  from './genreReducer.js';

var reducers = combineReducers({
    genreReducer: GenreReducer
});

export default reducers;