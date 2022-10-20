import React from 'react'
import { Cast } from '../interfaces/creditsInterface';
import { Image, Text, View, StyleSheet } from 'react-native';

interface Props {
    actor: Cast
}

export const CastItem = ( { actor }: Props  ) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`


  return (
    <View style= {styles.container}>

        {
            actor.profile_path && (
                <Image
                    source={{ uri }}
                    style={{ width: 50, height: 50, borderRadius: 10 }}
                />
            )
        }        

        <View  style= {styles.actorInfo}>
            <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold' }}>
                {actor.name}
            </Text>
            <Text style={{ fontSize: 18, color: '#000', opacity: 0.7 }}>
                {actor.character}
            </Text>
        </View>


    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10, 
        height: 60,
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 10,
        marginLeft: 20,
        paddingRight: 15,
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 3
    }
})
