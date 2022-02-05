import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import ListItem from '../../components/ListItem';
import {configStore} from '../../store/store';
import {Provider} from 'react-redux';

class ListTrainer extends Component {
  render() {
    return (
      <Provider store={configStore}>
        <View style={styles.container}>
          <ListItem />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListTrainer;
