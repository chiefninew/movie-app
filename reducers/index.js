import { combineReducers } from 'redux';
import movies from './movies/reducers';

export default combineReducers({
    movies: movies,
});