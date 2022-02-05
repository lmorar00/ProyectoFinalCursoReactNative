import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import Form from '../../components/Form';
import {configStore} from '../../store/store';

export default class AddTrainer extends Component {
  render() {
    return (
      <Provider store={configStore}>
        <View style={styles.container}>
          <Form navigation={this.props.navigation} />
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
