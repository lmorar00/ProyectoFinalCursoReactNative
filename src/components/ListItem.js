import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Item from './Item';
import {
  INITIALIZE_ITEM,
  REMOVE_TRAINER,
} from '../store/actions/TrainerActionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

class ListItem extends Component {
  componentWillMount() {
    const {dispatch} = this.props;
    console.log(this.props);

    // INITIALIZE DATA FROM STORAGE. 449sc
    AsyncStorage.getItem('data').then(result => {
      let data = result;

      if (result !== null) {
        data = JSON.parse(data);
      } else {
        data = [];
      }

      dispatch({
        type: INITIALIZE_ITEM,
        data,
      });
    });

    //this.creareDataSource(this.props.data);

    console.log('dispatch');
  }

  componentWillReceiveProps(newProps) {
    AsyncStorage.setItem('data', JSON.stringify(newProps.data));

    //this.creareDataSource(newProps.data);
  }

  toggleCompleted(index) {
    const {dispatch} = this.props;
    dispatch({
      type: REMOVE_TRAINER,
      index,
    });
  }

  render() {
    return (
      <View style={styles.containerHasContent}>
        <Text style={styles.message}>No note!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerHasContent: {
    flex: 1,
  },
  containerNoContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    color: '#777',
  },
});

export default connect(state => {
  return {
    data: state.data,
  };
})(ListItem);
