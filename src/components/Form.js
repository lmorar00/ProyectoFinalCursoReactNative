import React, {Component} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {ADD_TRAINER} from '../store/actions/TrainerActionTypes.js';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  addItem(text) {
    const {dispatch} = this.props;
    console.log(this.props);
    dispatch({
      type: ADD_TRAINER,
      item: text,
    });
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.shadow}>
          <TextInput
            style={styles.textInput}
            placeholder={'Write somethings...'}
            placeholderTextColor={'#888'}
            autoFocus={true}
            multiline={true}
            onChangeText={text => this.setState({text})}
          />
          <TouchableOpacity onPress={this.addItem.bind(this, this.state.text)}>
            <View style={styles.button}>
              <Text style={styles.text}>{'Add'.toUpperCase()}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 5,
    padding: 15,
  },
  shadow: {
    borderRadius: 4,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    shadowOpacity: 0.5,
  },
  textInput: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    fontSize: 15,
    height: 120,
  },
  button: {
    height: 50,
    backgroundColor: '#86B404',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  text: {
    color: '#fff',
  },
});

export default connect(state => {
  return {
    data: state.text,
  };
})(Form);
