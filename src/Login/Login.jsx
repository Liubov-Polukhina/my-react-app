import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import * as styles from './Login.styles';
//import { LoginWrapper } from './Login.styles';

class Login extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Login will mount');
  }

  componentDidMount = () => {
    console.log('Login mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Login will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Login will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Login did update');
  }

  componentWillUnmount = () => {
    console.log('Login will unmount');
  }

  render () {
    if (this.state.hasError) {
      return (
        <View style={styles.LoginWrapper}>
          <Text>Something went wrong.</Text>
        </View>
      );
    }
    return (
      <View style={styles.LoginWrapper}>
        <Text>Test content</Text>
      </View>
    );
  }
}

Login.propTypes = {
  // bla: PropTypes.string,
};

Login.defaultProps = {
  // bla: 'test',
};

export default Login;
