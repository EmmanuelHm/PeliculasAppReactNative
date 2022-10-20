import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';

export type RootStackParams = {
  HomeScreen: undefined,  //Esta pantalla no recibe argumentos
  DetailScreen: Movie     //Rebibe un objeto de Movie
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = ()  => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            // cardStyle: {
            //     backgroundColor: 'white',
            // },
        }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}