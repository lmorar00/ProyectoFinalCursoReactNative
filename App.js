import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Details from './Components/Details';
import GenI from './Components/GenI';
import HomeScreen from './src/views/Home';
import Entrenadores from './src/views/Entrenadores';
import EquiposPokemon from './src/views/Equipos';
import AddTrainer from './src/views/Trainers/AddTrainer';
import ListTrainer from './src/views/Trainers/ListTrainer';

const stackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Pokedex: {
      screen: GenI,
    },
    Entrenadores: {
      screen: Entrenadores,
    },
    AgregarEntrenador: {
      screen: AddTrainer,
    },
    ListaEntrenadores: {
      screen: ListTrainer,
    },
    Equipos: {
      screen: EquiposPokemon,
    },
    Details: {
      screen: Details,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(stackNavigator);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
