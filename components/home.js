import { View, Text, StyleSheet, StatusBar, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import Styles from './styles';
import movies from '../film.json';
import { setMovieList } from '../reducers/movies/actions';
import { useDispatch, useSelector } from 'react-redux';
import MovieItem from './movie-item';

const styles = StyleSheet.create({
  headerText: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  }
})

const Home = () => {
  const dispatch = useDispatch();
  const movieList = useSelector(state => state.movies.list);

  useEffect(() => {
    dispatch(setMovieList(movies));
  }, []);

  return (
    <View style={Styles.background}>
      <StatusBar barStyle={'light-content'} />
      <View style={Styles.header}>
        <Text style={styles.headerText}>Watch Now</Text>
      </View>
      <FlatList
        numColumns={2}
        data={movieList}
        renderItem={({ item }) => <MovieItem item={item} />}
        ListHeaderComponent={() => <View style={{ height: 15 }} />}
      />
    </View>
  )
}

export default Home