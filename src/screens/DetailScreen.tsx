import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import {View, Image, StyleSheet, Dimensions, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { RootStackParams } from '../navigation/Navigation';

import Icon from "react-native-vector-icons/Ionicons";
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';

const screenHeight = Dimensions.get('screen').height;

//Obtener info de otra pantalla
interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{}

export const DetailScreen = ( { route, navigation } : Props ) => {

  const movie = route.params
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  const {isLoading, cast, movieFull } = useMovieDetails(movie.id);

  return (
    <ScrollView>

      <View style={ styles.imageContainer }>
        <View style={styles.imageBorder}>
          <Image
            source={{uri}} 
            style={styles.posterImage} 
          />
        </View>
      </View>

      <View style={ styles.marginContainer }>
        <Text style={ styles.subtitle }>{ movie.original_title }</Text>
        <Text style={ styles.title }>{ movie.title }</Text>
      </View>

      { 
        isLoading 
          ? <ActivityIndicator size={35} color='grey' style={{ marginTop: 20 }}/>
          : <MovieDetails  movieFull={ movieFull! } cast={ cast }/>
      }

      {/* Botón para cerrar */}
      <TouchableOpacity style={styles.backButton}>
        <Icon 
          color='white'
          name='arrow-back-circle-outline'
          size={60}
          onPress={ () => navigation.pop() }
        />
      </TouchableOpacity>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  imageContainer: {
    width: '100%', 
    height: screenHeight * 0.7,
    shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 10,
      },
      shadowOpacity: 0.24,
      shadowRadius: 7,
      elevation: 10,
      borderBottomEndRadius: 25,
      borderBottomLeftRadius: 25,
  },
  imageBorder:{
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomLeftRadius: 25,
  },
  posterImage: {
    flex: 1
  },

  marginContainer:{
    marginHorizontal: 20,
    marginTop: 20
  } ,
  subtitle:{
    fontSize: 16,
    color: 'black',
    opacity: 0.9
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },

  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 25,
    left: 10
  }
  
})
