import React, { PureComponent } from 'react';
import { SafeAreaView, ActivityIndicator, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { Storage } from '@/utils';
import config from '@/config';

const { authKey } = config;

class AuthLoading extends PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired
  };

  componentDidMount() {
    this.checkToken();
  }

  checkToken = async () => {
    const { navigation } = this.props;
    const userToken = await Storage.get(authKey);
    navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {
    return (
      <SafeAreaView>
        <ActivityIndicator />
        <StatusBar barStyle='default' />
      </SafeAreaView>
    );
  }
}

export default AuthLoading;
