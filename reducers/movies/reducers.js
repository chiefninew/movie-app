import Types from './types';
import InitialState from './initialState';

const { SET_MOVIE_LIST, SELECT_MOVIE } = Types;

const user = (state = InitialState, action = {}) => {
  switch(action.type) {
    case SET_MOVIE_LIST: {
      return { ...state, list: action.payload };
    }
    case SELECT_MOVIE: {
      return { ...state, selectedMovie: action.payload }
    }
    default:
      return state;
  }
}

export default user;