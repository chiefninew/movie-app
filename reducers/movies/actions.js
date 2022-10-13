import Types from './types';

const { SET_MOVIE_LIST } = Types;

export const setMovieList = (list) => {
  return {
    type: SET_MOVIE_LIST,
    payload: list
  }
}