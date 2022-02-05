import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

import TemplateStyles from '../styles/TemplateStyles';
import HomeStyles from '../styles/HomeStyles';
import CategoryStyles from '../styles/CategoryStyles';

const HomeScreen = props => {
  return (
    <View style={TemplateStyles.container}>
      <Text style={HomeStyles.title}>¿Qué estás buscando?</Text>
      <View style={HomeStyles.containerCategory}>
        <View style={HomeStyles.groupCategory}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Pokedex')}>
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{...CategoryStyles.category, backgroundColor: '#4FC1A6'}}>
              <Text style={CategoryStyles.title}>Pokedex</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Entrenadores')}>
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{...CategoryStyles.category, backgroundColor: '#77C4FE'}}>
              <Text style={CategoryStyles.title}>Trainers</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={HomeStyles.groupCategory}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Equipos')}>
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{...CategoryStyles.category, backgroundColor: '#7C538c'}}>
              <Text style={CategoryStyles.title}>Teams</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{...CategoryStyles.category, backgroundColor: '#F7786B'}}>
              <Text style={CategoryStyles.title}>Otros</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
