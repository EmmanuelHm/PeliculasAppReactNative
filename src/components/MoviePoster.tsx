import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { text } from '../theme/AppTheme';
import { Movie } from '../interfaces/movieInterface';

interface Props{
    movie: Movie
}

export const MoviePoster = ({movie} :  Props) => {
    
    const { title, poster_path } = movie;
    const uri = `https://image.tmdb.org/t/p/w500${poster_path}`

  return (
    <View style={{
        width: 300,
        height: 420,
    }}>
        <View style={styles.imageContainer}>
            <Image
                source={{uri}} 
                style={styles.image} />
        </View>
    </View>
  )
}

const styles =  StyleSheet.create({

    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer:{
        flex: 1,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 10,
    }
});
