import { View, Text, useWindowDimensions, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Styles from './styles'
import { Rating } from 'react-native-ratings'

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: 'white'
  },
  plot: {
    fontSize: 14,
    color: 'white'
  }
})

const MovieItem = ({ item, onPress = () => {} }) => {
  const { width } = useWindowDimensions();

  return (
    <TouchableOpacity>
      <ImageBackground
        source={{ uri: item.Images[2] }}
        resizeMode={'cover'}
        style={[
          Styles.item,
          {
            width: (width - 60) / 2,
            height: (width / 2) + 60
          }
        ]}
      >
        <View style={Styles.itemDetails}>
          <Text style={styles.title}>{item.Title}</Text>
          <Text style={styles.plot} numberOfLines={2}>({item.Year})</Text>
          <View style={{ alignSelf: 'flex-start', paddingVertical: 3 }}>
            <Rating
              type='custom'
              tintColor='#1C1C1C'
              readonly={true}
              imageSize={16}
              ratingCount={5}
              startingValue={item.imdbRating}
            />
          </View>
          <Text style={styles.plot} numberOfLines={3}>{item.Plot}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default MovieItem