import React from 'react'
import { Dimensions, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { MoviePoster } from './MoviePoster';
import { Movie } from '../interfaces/movieInterface';

const {width: windowWidth} = Dimensions.get('window');

interface Props {
    movies: Movie[]
}

export const CarouselSlider = ({ movies}: Props) => {
  return (
    <View style={{ height: 440 }}>
          <Carousel
            data={movies}
            renderItem={ ({ item }: any) => <MoviePoster movie={ item } /> }
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
    </View>
  )
}
