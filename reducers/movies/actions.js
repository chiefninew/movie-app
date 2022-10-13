import Types from './types';

const { SET_MOVIE_LIST, SELECT_MOVIE } = Types;

export const setMovieList = (list) => {
  return {
    type: SET_MOVIE_LIST,
    payload: list
  }
}

export const selectMovie = (movie) => {
  return {
    type: SELECT_MOVIE,
    payload: movie
  }
}