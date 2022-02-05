import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import TemplateStyles from '../styles/TemplateStyles';
import HomeStyles from '../styles/HomeStyles';
import CategoryStyles from '../styles/CategoryStyles';

const Entrenadores = props => {
  return (
    <View style={TemplateStyles.container}>
      <Text style={HomeStyles.title}>¿Qué desesas hacer?</Text>
      <View style={HomeStyles.containerCategory}>
        <View style={HomeStyles.groupCategory}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('AgregarEntrenador')}>
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{...CategoryStyles.category, backgroundColor: '#FFCE4B'}}>
              <Text style={CategoryStyles.title}>Crear Trainer</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={HomeStyles.groupCategory}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ListaEntrenadores')}>
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{...CategoryStyles.category, backgroundColor: '#B1736C'}}>
              <Text style={CategoryStyles.title}>Mostrar Trainers</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Entrenadores;
