import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets()

  const { peliculasEnCine, isLoading } = useMovies()

  if(isLoading){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color='red' size={100} />
      </View>
    )
  }

  return (
    <View style={{ marginTop: top + 20 }}>
      
      <MoviePoster movie={peliculasEnCine[10] } />

    </View>
  )
}
