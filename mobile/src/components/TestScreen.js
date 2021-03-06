import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import PropTypes from 'prop-types';
import { getUsers } from '../actions/authActionDispatchers';
import { connect } from 'react-redux';

class TestScreen extends React.Component {
  constructor() {
    super();
    this.handleTestPress = this.handleTestPress.bind(this);
  }

  componentDidMount() {
    this.handleTestPress();
  }

  handleTestPress() {
    this.props.getUsers(this.props.navigation);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Welcome! {this.props.auth.user.username}
        </Text>
        <Text style={styles.text}>This will be your future feed!</Text>
      </View>
    );
  }
}

TestScreen.propTypes = {
  getUsers: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { getUsers },
)(TestScreen);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'crimson',
    height: '100%',
    width: '100%',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    width: '75%',
    backgroundColor: 'blue',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingVertical: 15,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
