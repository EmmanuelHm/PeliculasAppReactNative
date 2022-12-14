import React from 'react'
import { FlatList, View, Text } from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import currencyFormatter from "currency-formatter";

import Icon from "react-native-vector-icons/Ionicons";
import { CastItem } from './CastItem';

interface Props{
    movieFull: MovieFull,
    cast: Cast[]
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
        {/* Detalles */}
        <View style={{ marginHorizontal: 20  }}>
            <View style={{ flexDirection: 'row' }}>
              <Icon
                  name='star-outline'
                  color='grey'
                  size={16}
              />
              <Text style={{color: '#000'}}> { movieFull.vote_average }</Text>

              <Text style={{color: '#000', marginLeft: 5}}>
                - { movieFull.genres.map( g => g.name).join(', ') }
              </Text>
            </View>

          {/* Historia */}
          <Text style={{ fontSize: 23, color: '#000', marginTop: 10, fontWeight: 'bold'}}>
            Historia
          </Text>
          <Text style={{ fontSize: 16, color: '#000', textAlign: 'justify' }}>
            { movieFull.overview }
          </Text>

          {/* Presupuesto */}
          <Text style={{ fontSize: 23, color: '#000', marginTop: 10, fontWeight: 'bold'}}>
          Presupuesto
          </Text>
          <Text style={{ fontSize: 18, color: '#000', textAlign: 'justify' }}>
            { currencyFormatter.format(movieFull.budget, {code: 'USD'} ) }
          </Text>

        </View>

        {/* Casting */}
        <View style={{ marginTop: 10, marginBottom: 10  }}>
          <Text style={{ fontSize: 23, color: '#000', marginTop: 10, fontWeight: 'bold', marginHorizontal: 20 }}>
            Actores
          </Text>

          <FlatList
            data={ cast }
            keyExtractor={ (item) => item.id.toString()} 
            renderItem={ ({item}) => <CastItem actor={ item } /> }
            horizontal={ true }
            showsHorizontalScrollIndicator={ false }
            style={{ marginTop: 10, height: 70 }}
          />

          
        </View>


    </>
  )
}
