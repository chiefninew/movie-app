import { View, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity, InteractionManager } from 'react-native'
import React, { useEffect, useState } from 'react'
import Styles from './styles';
import movies from '../film.json';
import { setMovieList } from '../reducers/movies/actions';
import { useDispatch, useSelector } from 'react-redux';
import MovieItem from './movie-item';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  headerText: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  }
})

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [ready, setReady] = useState(false);
  const movieList = useSelector(state => state.movies.list);

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      dispatch(setMovieList(movies));
      setReady(true);
    })
  }, []);

  return (
    <View style={Styles.background}>
      <StatusBar barStyle={'light-content'} />
      <View style={Styles.header}>
        <Text style={styles.headerText}>Watch Now</Text>
        <TouchableOpacity onPress={() => navigate('/search')}>
          <FontAwesome name={'search'} size={24} color={'white'} />
        </TouchableOpacity>
      </View>
      {
        ready && (
          <FlatList
            numColumns={2}
            data={movieList}
            renderItem={({ item }) => <MovieItem item={item} />}
            ListHeaderComponent={() => <View style={{ height: 15 }} />}
          />
        )
      }
    </View>
  )
}

export default Home