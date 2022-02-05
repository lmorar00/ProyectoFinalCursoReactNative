import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import TemplateStyles from '../styles/TemplateStyles';
import HomeStyles from '../styles/HomeStyles';
import CategoryStyles from '../styles/CategoryStyles';

const EquiposPokemon = props => {
  return (
    <View style={TemplateStyles.container}>
      <Text style={HomeStyles.title}>¿Qué desesas hacer?</Text>
      <View style={HomeStyles.containerCategory}>
        <View style={HomeStyles.groupCategory}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Pokedex')}>
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{...CategoryStyles.category, backgroundColor: '#FFCE4B'}}>
              <Text style={CategoryStyles.title}>Crear Team</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={HomeStyles.groupCategory}>
          <TouchableOpacity>
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{...CategoryStyles.category, backgroundColor: '#B1736C'}}>
              <Text style={CategoryStyles.title}>Mostrar Teams</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EquiposPokemon;
