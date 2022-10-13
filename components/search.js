import { View, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity, useWindowDimensions, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Styles from './styles';
import { selectMovie } from '../reducers/movies/actions';
import { useDispatch, useSelector } from 'react-redux';
import MovieItem from './movie-item';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    marginLeft: 15,
    fontSize: 18,
    color: 'white',
  }
})

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  const movieList = useSelector(state => state.movies.list);
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (!!search) {
      const temp = [];
      movieList.map(movie => {
        var regEx = new RegExp(search, 'gi');
        if (movie.Title.match(regEx)) {
          temp.push(movie);
        }
      });
      setResult(temp);
    } else {
      setResult(movieList);
    }
  }, [search]);

  const selectItem = (movie) => {
    dispatch(selectMovie(movie));
    //ADD NAVIGATE TO VIEW MOVIE HERE
  }

  return (
    <View style={Styles.background}>
      <StatusBar barStyle={'light-content'} />
      <View style={[Styles.header, { backgroundColor: '#161616' }]}>
        <View style={{ zIndex: 1 }}>
          <TouchableOpacity onPress={() => navigate(-1)}>
            <FontAwesome name={'angle-left'} size={40} color={'white'} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.headerText}>Finder</Text>
        </View>
      </View>
      <View style={[Styles.header, { paddingTop: 15, justifyContent: 'flex-start' }]}>
        <FontAwesome name={'search'} size={22} color={'white'} />
        <TextInput
          style={styles.input}
          placeholder='Search'
          placeholderTextColor={'grey'}
          value={search}
          onChangeText={setSearch}
          underlineColorAndroid='transparent'
        />
      </View>
      <FlatList
        numColumns={2}
        data={result}
        renderItem={({ item }) => <MovieItem item={item} onPress={() => selectItem(item)} />}
        ListHeaderComponent={() => <View style={{ height: 15 }} />}
      />
    </View>
  )
}

export default Home