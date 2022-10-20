import React from 'react'
import { ActivityIndicator, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../hooks/useMovies';
import { ScrollView } from 'react-native-gesture-handler';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { CarouselSlider } from '../components/CarouselSlider';

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets()

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies()

  if(isLoading){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color='red' size={100} />
      </View>
    )
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>

        {/* Carousel Principal */}
        <CarouselSlider movies={nowPlaying}/>

        {/* Peliculas Populares */}
        <HorizontalSlider title='Popular'  movies={popular}/>

        {/* Peliculas Top Rated */}
        <HorizontalSlider title='Top Rated'  movies={topRated}/>

        {/* Peliculas Upcoming */}
        <HorizontalSlider title='Upcoming'  movies={upcoming}/>

      </View>
    </ScrollView>
  )
}
